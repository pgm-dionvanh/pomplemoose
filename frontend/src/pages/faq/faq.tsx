import { useParams } from "react-router";
import HomeBanner from "../../components/Banners/Homebanner";
import { Layout } from "../../components/Layout";
import FaqItem from "../../components/Faq/FaqItem";

export default function Faq() {
    const { catName } = useParams();
    return (
        <Layout title={"Pomplemoose - Faq"}>
            <FaqItem/>
        </Layout>
    )
}