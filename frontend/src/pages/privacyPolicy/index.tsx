import { useParams } from "react-router";
import { Layout } from "../../components/Layout";
import { PrivacyPolicy } from "../../components/PrivacyPolicy/privacyPolicy";

export default function PrivacyPolicyPage() {
    const { productId } = useParams();
    return (
        <Layout title={"Pomplemoose - Privacy policy"}>
            <PrivacyPolicy/>
        </Layout>
    )
}