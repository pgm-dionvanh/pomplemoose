import { useState } from 'react'
import { Layout } from '../../components/Layout';
import {
Formik,
Form,
Field,
} from 'formik';
//https://formik.org/docs/guides/validation
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useStoreContextValue } from '../../context/store.context';

interface RegisterForm {
firstName: string;
lastName: string;
mail: string;
password: string;
password_confirm: string;
}



const RegisterSchema = Yup.object().shape({
firstName: Yup.string().min(2).required('Required'),
lastName: Yup.string().min(2).required('Required'),
mail: Yup.string().email("Invalid email").required('Required'),
password: Yup.string().min(6).required('Required'),
password_confirm: Yup.string().min(6).required('Required').oneOf([Yup.ref('password'), null, "Passwords don't match!"])
})

export const Register: React.FC<{}> = () => {
    const initialValues: RegisterForm = { firstName: "", lastName:"", mail: "", password: "", password_confirm: "" };
    const { authStore } = useStoreContextValue();
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);

    return (
    <Layout title="Pomplemoose - Register">

        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h2 className='text-center text-2xl m-8'>Sign up</h2>
                <Formik validationSchema={RegisterSchema} initialValues={initialValues} onSubmit={async (values, actions)=> {
                        const auth = await authStore.register({
                            firstName: values.firstName,
                            lastName : values.lastName,
                            email: values.mail,
                            password: values.password,
                            confirm_password: values.password_confirm
                        });

                        if(auth === 201){
                            navigate('/login')
                        }
                    }}
                    >

                    {({ errors, touched }) => (


                    <Form className="flex flex-col justify-center m-auto">

                        {errors.password || errors.mail || errors.firstName || errors.lastName ||
                        errors.password_confirm ? (
                        <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>
                                <span className="font-medium">Ensure that these requirements are met:</span>
                                <ul className="mt-1.5 ml-4 text-red-700 list-disc list-inside">

                                    {errors.firstName ? (
                                    <li>firstName: {errors.firstName}</li>
                                    ) : null}

                                    {errors.lastName ? (
                                    <li>lastName: {errors.lastName}</li>
                                    ) : null}

                                    {errors.mail ? (
                                    <li>Mail: {errors.mail}</li>
                                    ) : null}

                                    {errors.password ? (
                                    <li>Password: {errors.password}</li>
                                    ) : null}

                                    {errors.password_confirm ? (
                                    <li>Password Confirm: {errors.password_confirm}</li>
                                    ) : null}
                                </ul>
                            </div>
                        </div>
                        ) : null}

                        <Field className=" md:w-[32rem] rounded-xl border-solid p-3 border-2 mt-4" type="text"
                            name="firstName" id="firstName" placeholder="First Name*" />

                        <Field className=" md:w-[32rem] rounded-xl border-solid p-3 border-2 mt-4" type="text"
                            name="lastName" id="lastName" placeholder="Last Name*" />

                        <Field className=" md:w-[32rem] rounded-xl border-solid p-3 border-2 mt-4" type="email"
                            name="mail" id="mail" placeholder="Email*" />

                        <Field className="md:w-[32rem] rounded-xl border-solid p-3 border-2 mt-4" type="password"
                            name="password" id="password" placeholder="Password*" />

                        <Field className="md:w-[32rem] mb-4 rounded-xl border-solid p-3 border-2 mt-4" type="password"
                            name="password_confirm" id="password_confirm" placeholder="Confirm password*" />

                        <div className='flex justify-between'>
                            <div className='flex'>
                                <input type="checkbox" name="signedIn" id="signedIn" />
                                <label className="ml-2" htmlFor="signedIn">I agree to the Pomplemoose Terms of Service and
                                    Privacy Policy</label>
                            </div>
                        </div>


                        <button className="primary__button md:w-[32rem] mb-4 rounded-xl border-solid p-3 border-2 mt-4"
                            type="submit" value="Sign up">Create Account</button>
                        <Link to="/login" className="flex justify-center mt-1 mb-4">Already a member? <b className="ml-1">Sign
                                in</b></Link>

                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    </Layout>
    )}

    export default Register;