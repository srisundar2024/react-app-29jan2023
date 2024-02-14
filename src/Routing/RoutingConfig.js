import { Routes, Route } from "react-router";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Unauthorized from "./Unauthorized";
import ProductList from "./ProductList";
import { ProductDetail } from "./ProductDetail";

function RoutingConfig()
{
    return <>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="about" element={<About></About>} />
                <Route path="contact1" element={<Contact></Contact>} />
                <Route path="*" element={<Unauthorized></Unauthorized>} />

                <Route path="productlist" element={<ProductList></ProductList>}></Route>
                <Route path="product/:productId" element={<ProductDetail></ProductDetail>} ></Route>
            </Routes>
        </>
}

export default RoutingConfig;