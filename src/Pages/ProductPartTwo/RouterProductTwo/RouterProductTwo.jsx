import { Route, Routes } from "react-router-dom";
import ProductTwo from "../ProductTwo";
import Showone from "../Showone";

const RouterProduct = () => {
    return (  <>
          <Routes>
                <Route path="/" element={<ProductTwo/>} />
                <Route path="/:id" element={<Showone/>} />
            </Routes>
    </>);
}
 
export default RouterProduct;