import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home/Home";
import Show from "../AmazingProduct/Show";
import Header from "../Header/Header";

const App = () => {
    return ( 
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/:id"  element={<Show/>}/>
        </Routes>
      </BrowserRouter>
     );
}
 
export default App;