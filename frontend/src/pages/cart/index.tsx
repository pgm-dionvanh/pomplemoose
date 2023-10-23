import { useParams } from "react-router";
import HomeBanner from "../../components/Banners/Homebanner";
import Cart from "../../components/Cart/Cart";
import { Layout } from "../../components/Layout";

export default function CartPage() {
    const { catName } = useParams();
    return (
        <Layout title={"Pomplemoose - Cart"}>
            <Cart/>
        </Layout>
    )
}