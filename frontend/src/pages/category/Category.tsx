import { useParams } from "react-router";
import HomeBanner from "../../components/Banners/Homebanner";
import { Layout } from "../../components/Layout";
import CategoryEl from "../../components/Category/category";
export default function Category() {
    const { catName } = useParams();
    return (
        <Layout title={"Pomplemoose - " + catName?.toLowerCase()}>
            <CategoryEl/>
        </Layout>
    )
}