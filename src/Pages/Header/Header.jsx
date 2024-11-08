import Icon from "react-icons-kit";
import imglogo from  "../../Media/banerup.png"
import dglogo from "../../Media/dglogo.png"
import {search} from 'react-icons-kit/fa/search'

import "./Header.module.css"
import Navbar from "./Navbar";
import Login from "../Login/Login";
const Header = () => {
    return ( 
        <>
            <div className="shadow-2xl">
                <a href="">
                    <img className="h-[11vh] w-[100%]" src={imglogo} alt="" />
                </a>
                <div className=" flex flex-row w-[100%] mt-2">
                    <div className=" w-[60%] flex flex-row ">
                        <a href="" className="w-[40%]">
                        <img src={dglogo} className="w-[90%]" alt="" />
                        </a> 
                        <div className="w-[95%] rounded-lg  bg-[#F0F0F1] p-3 flex flex-row justify-center gap-3">
                            <Icon icon={search} size={22} className="text-[#b1b1b1] w-[25px]" alt="" />

                            <input  type="text" className="w-[100%]   bg-[#F0F0F1] outline-none" placeholder="جستوجو" name="" id="input" />
                        </div>                       
                    </div>
                    <div className="w-[40%]  flex flex-row  justify-end">
                       <Login/>
                       

                    </div>
                
                </div>
                <div className=" flex flex-row justify-between mt-2">
                
                    <Navbar/>
                    
                </div>
            </div>   
        </>
     );
}
 
export default Header;