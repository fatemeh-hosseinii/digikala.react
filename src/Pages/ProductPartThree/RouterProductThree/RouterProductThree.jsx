import { Route, Routes } from "react-router-dom";
import ProductPartThree from "../ProductPartThree";
import ShowThree from "../ShowThree/ShowThree";


const RouterProductThree = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductPartThree />} />
            <Route path="/:id" element={<ShowThree />} />
     

        </Routes>
    );
};

export default RouterProductThree;
