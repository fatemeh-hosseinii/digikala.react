import { Route, Routes } from "react-router-dom";


import AmazingProduct from "../AmazingProduct";
import Show from "../Show";

const Routerproduct = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<AmazingProduct/>} />
                <Route path="/:id" element={<Show/>} />
            </Routes>
        </>
     );
}
 
export default Routerproduct;