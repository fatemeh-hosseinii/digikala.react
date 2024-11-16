import { Route, Routes } from "react-router-dom";
import ProductPartTwo from "../ProductPartTwo";
import Showone from "../ShowOne/ShowOne";



const RouterProductTwo = () => {
    return (  <>
          <Routes>
                <Route path="/" element={<ProductPartTwo/>} />
                <Route path="/:id" element={<Showone/>} />
            </Routes>
    </>);
}
 
export default RouterProductTwo;