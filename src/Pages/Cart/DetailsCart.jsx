import SpecialSell from "../../Media/SpecialSell.png"
import {trashcan} from 'react-icons-kit/oct/trashcan'
import {u2795} from 'react-icons-kit/noto_emoji_regular/u2795'
import { ic_store_outline } from 'react-icons-kit/md/ic_store_outline';
import { ic_verified_user_outline } from 'react-icons-kit/md/ic_verified_user_outline';
import {androidCar} from 'react-icons-kit/ionicons/androidCar'
import { ic_navigate_before_twotone } from 'react-icons-kit/md/ic_navigate_before_twotone';

import Icon from "react-icons-kit";
const DetailsCart = ({product}) => {
    return (
        <>
            <div className="bg-gray-800 flex flex-col">
                <div className="bg-black p-2">
                    <div className="bg-[yellow] mt-2 flex flex-row">
                            <div className="w-[20%] bg-slate-500 flex flex-col p-">
                                <div className="w-[90%]">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="mt-2 w-[80%] flex flex-row justify-center">
                                    <img className="w-[60%]" src={SpecialSell} alt="" />
                                </div>
                                
                            </div>
                            <div className="bg-[red] flex flex-col gap-2">
                                <p className="text-[14px] font-bold">    
                                اسپیکر بلوتوثی قابل حمل ایکس-انرژی مدل Climber

                                </p>
                                <p className="text-[12px]">مشکی</p>
                                <div className="bg-[yellow] flex flex-row gap-2">
                                    <Icon className="text-[#A1A3A8]" icon={ic_verified_user_outline} size={18}/>
                                    <p className="text-[12px] mt-1">گارانتی 12 ماهه ipm</p>
                                    
                                </div>
                                <div className="bg-[yellow] flex flex-row gap-2">
                                    <Icon className="text-[#A1A3A8]" icon={ic_store_outline} size={18}/>
                                    <p className="text-[12px] mt-1"> آرون گستر </p>
                                    
                                </div>
                                <div className="bg-[yellow] flex flex-row gap-2">
                                    <Icon className="text-[#EC4D6D]" icon={androidCar} size={18}/>
                                    <p className="text-[12px] mt-1">  ارسال دیجی‌کالا </p>
                                    
                                </div>
                                <div className="bg-[yellow] flex flex-row gap-2">
                                    <Icon className="text-[#EC4D6D]" icon={androidCar} size={18}/>
                                    <p className="text-[12px] mt-1">  ارسال امروز (فعلا در شهر تهران و کرج) </p>
                                    
                                </div>
                            </div>
                    </div>
                   <div className="bg-[blue] flex flex-row p-2 gap-5">
                        <div className="bg-[pink] w-[12%] rounded-md border-[gray] border-2 px-2 py-2 flex flex-row justify-between">
                             <button>
                                <Icon icon={trashcan} size={18} className="text-[red]"/>
                            </button>  
                            <p className="mt-1 text-[red]" >1</p>
                            <button>
                                <Icon icon={u2795} size={18} className="text-[red]"/>
                            </button>                       
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-2">
                                <p className="text-[11px] text-[red]">۹۲۰,۰۰۰ تومان</p>
                                <span className="text-[11px] text-[red]">تخفیف</span>
                                
                            </div>
                            <p>۲,۴۷۹,۰۰۰ تومان</p>
                        </div>
                   </div>
                </div>
               <div className="bg-rose-900 flex flex-row justify-end">
                <div className="flex flex-row">
                    <p className="text-[13px] text-[#3EBFD6] mt-1">انتقال به خرید بعدی</p>
                    <Icon className="text-[#3EBFD6]" icon={ic_navigate_before_twotone} size={22} />
                </div>
                       
               </div>
              
            </div>
        </>
      );
}
 
export default DetailsCart;