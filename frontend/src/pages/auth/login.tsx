import React, { useState } from 'react'
import {
Formik,
Form,
Field,
FormikProps,
withFormik,
} from 'formik';
//https://formik.org/docs/guides/validation
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Layout } from "../../components/Layout";
import { useStoreContextValue } from '../../context/store.context'
import Gmail from "../../assets/img/gm-icon.svg"
import Facebook from "../../assets/img/fb-icon.svg"

interface LoginForm {
mail: string;
password: string;
}

interface OtherProps {
title?: string,
ref?: any
}

interface LoginFormProps {
    mail?: string,
    password?: string
}

let notAuthorized = false;

const LoginSchema = Yup.object().shape({
mail: Yup.string().email("Invalid email").required('Required'),
password: Yup.string().min(6).required('Required')
})

const InnerForm = (props: OtherProps & FormikProps<LoginForm>) => {
    const {
    values,
    errors,
    touched
    } = props
    const { t, i18n } = useTranslation();

    return (
    <React.Fragment>
        <main>

            <Form className="flex flex-col justify-center m-auto">
                { notAuthorized ?
                
                <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Not authorized:</span>
                        <ul className="mt-1.5 ml-4 text-red-700 list-disc list-inside">
                            <li>Username or password is wrong.</li>
                        </ul>
                    </div>
                </div>
                
                : null }

                {errors.password && touched.password || errors.mail && touched.mail ? (
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
                            {errors.mail && touched.mail ? (
                            <li>Mail: {errors.mail}</li>
                            ) : null}

                            {errors.password && touched.password ? (
                            <li>Password: {errors.password}</li>
                            ) : null}
                        </ul>
                    </div>
                </div>
                ) : null}



                <Field className=" md:w-[32rem] rounded-xl border-solid p-3 border-2 mt-4" type="email" name="mail"
                    id="mail" placeholder="Email*" />

                <Field className="md:w-[32rem] mb-4 rounded-xl border-solid p-3 border-2 mt-4" type="password"
                    name="password" id="password" placeholder={ t('password_field') } />

                <div className='flex justify-between'>
                    <div className='flex'>
                        <input type="checkbox" name="signedIn" id="signedIn" />
                        <label className="ml-2" htmlFor="signedIn">{ t('keep_signedIn') }</label>
                    </div>
                    <Link to="/forgot" >{ t('forgot_password') }?</Link>
                </div>

                <div className="flex justify-between mt-8 login__buttons">
                    <button className="flex justify-center items-center w-auto md:w-[15rem] h-[56px] fb--button"><img
                            src={Facebook} className="mr-4" alt="Facebook icon" />Facebook</button>
                    <button className="flex justify-center items-center w-auto md:w-[15rem] h-[56px] gm--button"><img
                            src={Gmail} className="mr-4 w-[24px] h-[24px]" alt="Gmail icon" />Gmail</button>
                </div>

                <input className="primary__button md:w-[32rem] mb-4 rounded-xl border-solid p-3 border-2 mt-4"
                    type="submit" value={ t('sign_in') } />
                <Link to='/register' className="flex justify-center mt-1 mb-4">{ t('not_aMember') }? <b className="ml-1">{ t('sign_up')
                        }</b></Link>

            </Form>
        </main>
    </React.Fragment>
    )
    }


    export const Login: React.FC<{}> = () => {
        const initialValues: LoginForm = {mail: "", password: ""};
        const { t, i18n } = useTranslation();
        const [navbar, setNavbar] = useState(false);
        const navigate = useNavigate();

        const { authStore } = useStoreContextValue();
        
        const  LoginFormFrag = withFormik<LoginFormProps, LoginFormProps>({
            mapPropsToValues : (props) => ({
                mail: props.mail,
                password: props.password
            }),
            validationSchema: LoginSchema,
            async handleSubmit(
                {mail, password}: LoginFormProps,
                {props, setSubmitting, setErrors}: any
            ){
                const auth = await authStore.login(mail, password);

                if(auth === 401) {
                    notAuthorized = true;
                }else{
                    if(authStore.isAuthenticated){
                        navigate('/');
                    }
                    notAuthorized = false;
                }
            }
        })(InnerForm)

        return (
        <Layout title="Pomplemoose - Login">

            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h2 className='text-center text-2xl m-8'>{ t('sign_in') }</h2>
                    <LoginFormFrag/>
                </div>
            </div>
        </Layout>
    )}

export default Login;