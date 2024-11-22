import { Route, Routes } from "react-router-dom";
import ProductPartThree from "../ProductPartThree";
import ShowThree from "../ShowThree/ShowThree";
import Cart from "../../Cart/Cart";

const RouterProductThree = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductPartThree />} />
            <Route path="/:id" element={<ShowThree />} />
            <Route path="/Cart/:id" element={<Cart />}/>

        </Routes>
    );
};

export default RouterProductThree;
