import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home/Home";
import Show from "../AmazingProduct/Show";
import Header from "../Header/Header";
import Routerproductone from "../AmazingProduct/Routerproductone/Routerproductone";
import RouterproductTwo  from "../ProductPartTwo/RouterProductTwo/RouterProductTwo";
const App = () => {
    return ( 
        <BrowserRouter >
        <Header/>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/productsone/*" element={<Routerproductone />} /> 
            <Route path="/productstwo/*" element={<RouterproductTwo/>} /> 


        </Routes>
      </BrowserRouter>
     );
}
 
export default App;