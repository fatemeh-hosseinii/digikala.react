
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";

const RouterCart = () => {
    return (
        <Routes>
            <Route path="/Cart/*" element={<Cart />} />
        </Routes>
    );
};

export default RouterCart;
