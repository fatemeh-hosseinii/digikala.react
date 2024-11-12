

import AmazingProduct from "../AmazingProduct/AmazingProduct";
import Amazingshop from "../Amazingshop/Amazingshop";
import BanerOne from "../Brand/BanerOne/BanerOne";

import Header from "../Header/Header";
import Information from "../Information/Information";
import Productpakaging from "../Productpackaging/Productpackaging";
import Slider from "../Slider/Slider";
import Story from "../Story/Story";


const Home = () => {
    return ( 
        <>
            
            <Story/>
            <Slider/>
            <Information/>
            <AmazingProduct/>
            <Amazingshop/>
            <BanerOne/>
            <Productpakaging/>
            
        </>
     );
}
 
export default Home;