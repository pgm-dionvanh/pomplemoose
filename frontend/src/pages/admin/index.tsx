import { useParams } from "react-router";
import HomeBanner from "../../components/Banners/Homebanner";
import { Layout } from "../../components/Layout";
import CategoryEl from "../../components/Category/category";
import AdminSideBar from "../../components/Admin/sideBar";
import AdminStats from "../../components/Admin/stats";
export default function AdminDashboard() {

    return (
        <Layout title={"Pomplemoose - Dashboard"}>
            <section className="flex">
                <AdminSideBar/>
                <AdminStats/>
            </section>
        </Layout>
    )
}