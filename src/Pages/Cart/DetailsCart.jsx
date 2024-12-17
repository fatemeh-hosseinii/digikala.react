import SpecialSell from "../../Media/SpecialSell.png"
import {trashcan} from 'react-icons-kit/oct/trashcan'
import {u2795} from 'react-icons-kit/noto_emoji_regular/u2795'
import { ic_store_outline } from 'react-icons-kit/md/ic_store_outline';
import { ic_verified_user_outline } from 'react-icons-kit/md/ic_verified_user_outline';
import {androidCar} from 'react-icons-kit/ionicons/androidCar'
import { ic_navigate_before_twotone } from 'react-icons-kit/md/ic_navigate_before_twotone';

import Icon from "react-icons-kit";
const DetailsCart = ({product,index }) => {
    console.log( "p",product);
   
    
    
    return (
        <>
            <div className="flex flex-col ">
                <div className=" p-2">
                    <div className=" mt-2 flex flex-row w-[100%]">
                            <div className="lg:w-[20%] w-[45%]   flex flex-col ">
                                <div className="lg:w-[90%] w-[100%]">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="mt-2 w-[80%] lg:flex hidden flex-row justify-center">
                                    <img className="w-[60%]" src={SpecialSell} alt="" />
                                </div>
                                
                            </div>
                            <div className=" flex flex-col  gap-2">
                                <p className="lg:text-[14px] text-[13px] font-bold">    
                                اسپیکر بلوتوثی قابل حمل ایکس-انرژی مدل Climber

                                </p>
                                <p className="text-[12px]">مشکی</p>
                                <div className=" flex flex-row gap-2">
                                    <Icon className="text-[#A1A3A8]" icon={ic_verified_user_outline} size={18}/>
                                    <p className="lg:text-[12px] text-[10px] mt-1">گارانتی 12 ماهه ipm</p>
                                    
                                </div>
                                <div className=" flex flex-row gap-2">
                                    <Icon className="text-[#A1A3A8]" icon={ic_store_outline} size={18}/>
                                    <p className="lg:text-[12px] text-[10px] mt-1"> آرون گستر </p>
                                    
                                </div>
                                <div className=" flex flex-row gap-2">
                                    <Icon className="text-[#EC4D6D]" icon={androidCar} size={18}/>
                                    <p className="lg:text-[12px] text-[10px] mt-1">  ارسال دیجی‌کالا </p>
                                    
                                </div>
                                <div className=" flex flex-row gap-2">
                                    <Icon className="text-[#EC4D6D]" icon={androidCar} size={18}/>
                                    <p className="lg:text-[12px] text-[10px] mt-1">  ارسال امروز (فعلا در شهر تهران و کرج) </p>
                                    
                                </div>
                            </div>
                    </div>
                   <div className="flex flex-row lg:w-[36%]  w-[100%] justify-between lg:mt-5 p-2 ">
                        <div className=" lg:w-[38%] w-[30%]  rounded-md border-[gray] border-[1px] lg:px-2 lg:py-2 flex flex-row justify-between">
                             <button>
                                <Icon icon={trashcan} size={18} className="text-[#EF4056]"/>
                            </button>  
                            <p className="lg:mt-1 mt-2 text-[#EF4056]" >1</p>
                            <button>
                                <Icon icon={u2795} size={18} className="text-[#EF4056]"/>
                            </button>                       
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-2">
                                <p className="text-[11px] text-[#ef4056]">۹۲۰,۰۰۰ تومان</p>
                                <span className="text-[11px] text-[#ef4056]">تخفیف</span>
                                
                            </div>
                            <p>۲,۴۷۹,۰۰۰ تومان</p>
                        </div>
                   </div>
                </div>
               <div className="flex flex-row justify-end">
                <div className="flex flex-row">
                    <p className="lg:text-[13px] text-[12px] text-[#3EBFD6] font-bold mt-1">انتقال به خرید بعدی</p>
                    <Icon className="text-[#3EBFD6] font-bold" icon={ic_navigate_before_twotone} size={22} />
                </div>
                       
               </div>
              
            </div>
         
        </>
      );
}
 
export default DetailsCart;