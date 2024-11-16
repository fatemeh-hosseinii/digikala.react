import { Route, Routes } from "react-router-dom";


import AmazingProduct from "../AmazingProduct";
import Show from "../Show";

const Routerproductone = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<AmazingProduct/>} />
                <Route path="/:id" element={<Show/>} />
            </Routes>
        </>
     );
}
 
export default Routerproductone;