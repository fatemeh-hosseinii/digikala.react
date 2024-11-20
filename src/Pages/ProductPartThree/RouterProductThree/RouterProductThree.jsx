import { Route, Routes } from "react-router-dom";

// import Cart from "../../Cart/Cart";

import ProductPartThree from "../ProductPartThree";



const RouterProductThree = () => {
    return (  <>
            <Routes>
                <Route path="/" element={<ProductPartThree/>} />
                {/* <Route path="/:id" element={<ShowOne/>} /> */}
                {/* <Route path="/Cart/:id" element={<Cart />}/> */}
            </Routes>
    </>);
}
 
export default RouterProductThree;