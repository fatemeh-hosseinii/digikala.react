import { Route, Routes } from "react-router-dom";
import ProductPartTwo from "../ProductPartTwo";
import ShowOne from "../ShowOne/ShowOne";



const RouterProductTwo = () => {
    return (  <>
          <Routes>
                <Route path="/" element={<ProductPartTwo/>} />
                <Route path="/:id" element={<ShowOne/>} />
            </Routes>
    </>);
}
 
export default RouterProductTwo;