import { useParams } from "react-router";
import { Layout } from "../../components/Layout";
import JustForYou from "../../components/Products/Justforyou";
import ProductDetail from "../../components/Products/Productdetail";

export default function Product() {
    const { productId } = useParams();
    return (
        <Layout title={"Pomplemoose - Product"}>
            <ProductDetail/>
            <JustForYou/>
        </Layout>
    )
}