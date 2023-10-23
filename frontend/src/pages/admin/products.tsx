import { useParams } from "react-router";
import HomeBanner from "../../components/Banners/Homebanner";
import { Layout } from "../../components/Layout";
import CategoryEl from "../../components/Category/category";
import AdminSideBar from "../../components/Admin/sideBar";
import AdminStats from "../../components/Admin/stats";
export default function AdminProducts() {

return (
<Layout title={"Pomplemoose - Products"}>
    <section className="flex">
        <AdminSideBar />
        <section
            className="mt-12  ml-24 pl-[16px] pr-[16px] sm:pl-[0px] sm:pr-[0px] mb-[70px] md:mb-12 max-w-[650px] md:max-w-[980px] lg:max-w-[1028px] xl:max-w-[1280px]">
            <form className="w-full">
                <div className="flex  space-x-1 py-4">
                    <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                        <label htmlFor="name">Product Name *</label>
                        <input className="px-4 py-2 border focus:outline-none" type="text" />
                    </div>
                    <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                        <label htmlFor="price">Product Price *</label>
                        <input type="number" className="px-4 py-2 border focus:outline-none" id="price" />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="description">Product Description *</label>
                    <textarea className="px-4 py-2 border focus:outline-none" name="description" id="description"
                        cols={5} rows={2} />
                    </div>
            {/* Most Important part for uploading multiple image */}
            <div className="flex flex-col mt-4">
              <label htmlFor="image">Product Image *</label>
             
              <input

                type="text"
                placeholder="image link"
              />
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Status *</label>
                <select
            
                  name="status"
                  className="px-4 py-2 border focus:outline-none"
                  id="status"
                >
                  <option id="status" value="Active">
                    Active
                  </option>
                  <option id="status" value="Disabled">
                    Disabled
                  </option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Category *</label>
                <select
                  
                  name="status"
                  className="px-4 py-2 border focus:outline-none"
                  id="status"
                >
                  <option disabled value="">
                    Select a category
                  </option>
              
                </select>
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="flex w-full flex-col space-y-1">
                <label htmlFor="quantity">Product in Stock *</label>
                <input
                 
                  type="number"
                  className="px-4 py-2 border focus:outline-none"
                  id="quantity"
                />
              </div>
              
            </div>
            <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
              <button
                style={{ background: "#303031" }}
                type="submit"
                className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
              >
                Add product
              </button>
            </div>
          </form>
                </section>
            </section>
        </Layout>
    )
}