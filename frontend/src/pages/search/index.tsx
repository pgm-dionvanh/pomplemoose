import { useParams } from "react-router";
import { Layout } from "../../components/Layout";
import Search from "../../components/Search/Search";

export default function SearchPage() {
    const { productId } = useParams();
    return (
        <Layout title={"Pomplemoose - Search"}>
            <Search/>
        </Layout>
    )
}