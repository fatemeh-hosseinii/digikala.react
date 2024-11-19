import { Route, Routes } from "react-router-dom";
import ProductPartTwo from "../ProductPartTwo";
import ShowOne from "../ShowOne/ShowOne";
import Cart from "../../Cart/Cart";



const RouterProductTwo = () => {
    return (  <>
            <Routes>
                <Route path="/" element={<ProductPartTwo/>} />
                <Route path="/:id" element={<ShowOne/>} />
                <Route path="/Cart/:id" element={<Cart />}/>
            </Routes>
    </>);
}
 
export default RouterProductTwo;