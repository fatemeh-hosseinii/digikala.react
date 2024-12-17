import Icon from "react-icons-kit";
import dglogo from "../../Media/dglogo.png";
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchpost_footer } from "../../Redux/FooterSlice";
import footerlogo2 from "../../Media/footerlogo2.png"
import bazar from "../../Media/coffe-bazzar.png"
import myket from "../../Media/myket.png"
import sib_app from "../../Media/sib-app.png"
import more from "../../Media/More.png"
import digkala from "../../Media/digimag.png"
import FooterList from "./FooterList";
import FooterRead from "./FooterRead";
import FooterRes from "./FooterRes";
import Accordion from "./FooterRes";
import FooterBrand from "./FooterBrand";
const Footer = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const{Footer,loading,erorr}=useSelector(state=>state.Footer)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_footer())
    },[])
    const handleScrollToTop = () => {
    const scrollTop = document.querySelector(".scroll_top");
    scrollTop.addEventListener("click",()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
     })
    
    };



  return (
    <>
         <div className="w-[100%] lg:hidden flex">
            <Accordion/>
            
         </div>   
        <div className=" mt-5 p-3 lg:flex hidden flex-col ">
            <div className="flex flex-row  justify-between w-[100%]">
            <div className="w-[15%]">
                <img src={dglogo} alt="Logo" />
            </div>
            <button onClick={handleScrollToTop} className="scroll_top bg-white py-2 px-4 flex border-[1px] border-[#aeaeae] items-center p-1 rounded-md">
                <p className="text-center mt-2 text-[12px] text-[#aeaeae]">بازگشت به بالا</p>
                <Icon icon={ic_keyboard_arrow_up} className="mt-1 text-[#aeaeae]" size={25}/>
            </button>
            </div>

            <div className="flex flex-row gap-10 mt-2 bg-white">
                {Footer?.map((item, index) => (
                    item.contact?.map((contactItem, elemIndex) => (
                    <div key={contactItem.id} className="flex items-center">
                        <p className="text-[12px] text-[#444746]">
                        {contactItem.title}
                        </p>
                        {elemIndex !== item.contact.length - 1 && (
                        <div className="line h-[3vh] bg-[#444746] w-[1px] mx-2"></div>
                        )}
                    </div>
                    ))
                ))}
               
           </div>
           <div className=" flex flex-row justify-around mt-3">
                {
                    Footer?.map((item,index)=>{
                        return item.baner_footer?.map((banerItem,elemIndex)=>{
                            return <>
                            <div className="flex flex-col justify-around items-center w-[100%] mt-5 ">
                                <div className="w-[25%]">
                                    <img src={banerItem.image} alt="2" />
                                                                        
                                </div>
                                <p className="text-[11px]">{banerItem.title}</p>        
                            </div>
                        
                            </>
                        })
                    })
                }
            
           </div>
            <div className=" w-[100%] flex flex-row gap-9 mt-6 ">
                <FooterList/>
              
           </div>
           <div className="bg-[#3C4B6D] rounded-lg p-4 w-[100%] flex flex-row justify-between">
                <div className=" flex flex-row gap-3 w-[60%]">
                    <div className="w-[5%]">
                        <img src={footerlogo2} alt="" />
                        
                    </div>
                    <p className="mt-2 text-[20px] font-bold text-[white] "> دانلود اپلیکیشن دیجی‌کالا</p>

                    
                </div>
                <div className="w-[40%] flex flex-row gap-5">
                    <img className="w-[25%] h-[40px]" src={bazar} alt="" />
                    <img className="w-[25%] h-[40px]" src={myket} alt="" /> 
                    <img className="w-[25%] h-[40px]" src={sib_app} alt=""/>
                    <div className="">
                        <button className="bg-white  rounded-md">
                            <img className="w-[40px]" src={more} alt="" />
                        </button>
                        
                    </div>

                </div>
                
            </div>
            <hr className="mt-5" />
            <div className="w-[100%] flex flex-row mt-5">
                <FooterRead/>
            </div>
            <hr className="mt-5" />
          
        </div>
        <div className=" lg:flex hidden flex-col  !p-0">
            <FooterBrand/>
              

        </div>
    </>
  );
};
export default Footer;
