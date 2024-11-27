import Icon from "react-icons-kit";
import dglogo from "../../Media/dglogo.png";
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpost_footer } from "../../Redux/FooterSlice";
import footerlogo2 from "../../Media/footerlogo2.png"
import bazar from "../../Media/coffe-bazzar.png"
import myket from "../../Media/myket.png"
import sib_app from "../../Media/sib-app.png"
import more from "../../Media/More.png"
const Footer = () => {
 
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
        <div className="bg-rose-900 mt-5 p-3 flex flex-col">
            <div className="flex flex-row bg-red-700 justify-between w-[100%]">
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
           <div className="bg-rose-800 flex flex-row justify-around mt-3">
                {
                    Footer?.map((item,index)=>{
                        return item.baner_footer?.map((banerItem,elemIndex)=>{
                            return <>
                            <div className="flex flex-col justify-around items-center w-[100%]">
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
            <div className="bg-[yellow] w-[100%] flex flex-row gap-5">
                <div className="w-[70%] bg-[red] flex justify-between flex-row">
            
                    {Footer?.map((list) =>
                        list?.lists?.map((elem) => (
                            <div key={elem.id} className="flex flex-col bg-slate-900 justify-around">
                                <h2 className="text-white">{elem.title}</h2>
                                <div className="bg-rose-900 flex flex-col p-2 gap-5">
                                    {elem?.items?.map((item) => (
                                        <p key={item.id} className="text-gray-300 text-[12px]">
                                            {item.title}
                                        </p>
                                    ))}
                                    
                                </div>
                            </div>
                        ))
                    )}

                </div>
                <div className="flex flex-col bg-slate-600 p-2">
                    <p className="text-[15px]">همراه ما باشید!</p>

                    
                </div>    
           </div>
           <div className="bg-[pink] rounded-lg p-4 w-[100%] flex flex-row justify-between">
                <div className="bg-[yellow] flex flex-row gap-3 w-[60%]">
                    <div className="w-[5%]">
                        <img src={footerlogo2} alt="" />
                        
                    </div>
                    <p className="mt-2 text-[20px] font-bold "> دانلود اپلیکیشن دیجی‌کالا</p>

                    
                </div>
                <div className="bg-slate-900 w-[40%] flex flex-row gap-5">
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

        </div>
    </>
  );
};

export default Footer;
