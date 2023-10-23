import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";
import { apolloClient} from "./database/apolloClient";
import { ApolloProvider } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';

import Home from "./pages";
import Category from "./pages/category/Category";
import Product from "./pages/product";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Faq from "./pages/faq/faq";
import PrivacyPolicyPage from "./pages/privacyPolicy";
import SearchPage from "./pages/search";
import CartPage from "./pages/cart";
import WishlistPage from "./pages/wishlist";
import { StoreContextProvider } from "./context/store.context";
import AdminDashboard from "./pages/admin";
import AdminProducts from "./pages/admin/products";


/*             
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/category/:catName" element={<Category />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/payment" element={<Payment />}/>
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/privacyPolice" element={<PrivacyPolicePage/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard/>} />
            <Route path="/admin/dashboard/categories" element={<AdminCategories/>} />
            <Route path="/admin/dashboard/products" element={<AdminProducts/>} />
*/

function App() {
return (
<StoreContextProvider>
<ApolloProvider client={apolloClient}>
    <HelmetProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/wishlist" element={<WishlistPage/>}></Route>

                <Route path="/cart" element={<CartPage/>}></Route>
                <Route path="/search/:term" element={<SearchPage/>}></Route>
                <Route path="/category/:catName" element={<Category/>}></Route>
                <Route path="/product/:productId" element={<Product/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/privacyPolicy" element={<PrivacyPolicyPage/>}></Route>
                <Route path="/admin/dashboard" element={<AdminDashboard/>} />
                <Route path="/admin/dashboard/products" element={<AdminProducts/>} />

            </Routes>
        </Router>
    </HelmetProvider>
</ApolloProvider>
</StoreContextProvider>
)
}

export default App;