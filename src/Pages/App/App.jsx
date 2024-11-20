import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home/Home";
import Header from "../Header/Header";
import Routerproductone from "../AmazingProduct/Routerproductone/Routerproductone";
import RouterProductTwo from "../ProductPartTwo/RouterProductTwo/RouterProductTwo";
import RouterProductThree from "../ProductPartThree/RouterProductThree/RouterProductThree";
const App = () => {
    return ( 
        <BrowserRouter >
        <Header/>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/productsone/*" element={<Routerproductone />} /> 
            <Route path="/productstwo/*" element={<RouterProductTwo/>} /> 
            <Route path="/productthree" element={<RouterProductThree/>}/>


        </Routes>
      </BrowserRouter>
     );
}
 
export default App;