import Icon from "react-icons-kit";
import {ic_star} from 'react-icons-kit/md/ic_star'
import {ic_navigate_before_twotone} from 'react-icons-kit/md/ic_navigate_before_twotone'
import { homeOutline } from 'react-icons-kit/typicons/homeOutline';
import {ic_store_outline} from 'react-icons-kit/md/ic_store_outline'
import free_delivery from "../../../Media/free-delivery.png"
import {ic_error_outline_twotone} from 'react-icons-kit/md/ic_error_outline_twotone'

const  PartLeftItemShow= ({productshow}) => {
    return ( <>
                  <div className="w-[65%] ">
                <div className="flex flex-col p-2 gap-3">
                    <p className="text-[#6ABFD3] text-[16px]">{productshow.explain}</p>
                    <p className="text-[16px] font-bold">{productshow.title}</p>
                
                </div>

                <hr />

                <div className="flex flex-row  mt-2 gap-3">
                    <div className=" flex flex-row gap-1">
                        <Icon icon={ic_star} className="text-[yellow]"/>
                        <p className="text-[14px] mt-1">{productshow.rating}</p>
                        <p className="text-[10px] text-gray-200 mt-1">(امتیاز ۱۱۳ خریدار)</p>

                    </div>
                    <div className="flex flex-row  gap-4">
                        <p className="text-[12px] text-[#6ABFD3] mt-1">۷۵ دیدگاه</p>
                        <p className="text-[12px] text-[#6ABFD3] mt-1">۷۵ پرسش </p>

                    </div>
                    
                </div>
                <div className="bg-slate-500 p-1">
                    <div className="p-2 bg-[yellow]">
                        <p>رنگ:مشکی</p>
                    </div>
                <div className=" p-2 flex flex-col">
                    <p className="font-bold">ویژگی ها</p>
                    <div className="flex flex-row gap-2 flex-wrap">
                        
                            {productshow.feature.map((elem)=>{
                                return(
                                    <div className="bg-[#F0F0F1] px-6 py-4 w-[38%] rounded-lg mt-2"> 
                                        <p className="text-[12px] text-right text-[#afafb2]">{elem.title}</p>
                                        <p className="text-[11px] text-right">  {elem.describtion} </p> 

                                    </div>
                                )
                            })}

                        
                    </div>
                    
                </div>


                <div className="feature bg-[white] p-2  flex flex-col">

                    <div className="flex flex-row justify-around">
                       <div className="line bg-[#c2c2c2] w-[25%] h-[2px] mx-auto mt-3"></div>
                        <button className="bg-white border-2 p-2 gap-3 flex flex-row rounded-lg border-solid border-[#c2c2c2] ">
                                <p className="text-[11px] text-[#2f2e2e] mt-1">                        
                                    مشاهده همه ویژگی‌ها
                                </p>
                                <Icon icon={ic_navigate_before_twotone}/>
                        </button>

                        <div className="line bg-[#c2c2c2] w-[25%] h-[2px] mx-auto mt-3"></div>
                    </div>
                    <div className="mt-3">
                        <p className="text-[12px] text-[#969595]">
                        درخواست مرجوع کردن کالا در گروه ساعت هوشمند با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).
                        </p>
                    </div>
                    
                </div>
                <div className="bg-orange-950 mt-5 p-5 rounded-lg">
                    <p className="text-[#B12BA7]">ارسال رایگان سفارش‌ها برای اعضای پلاس</p>
                    <p className="text-[12px] mt-2 text-[#CAD4CB]">۴ ارسال رایگان ماهانه + ۲ ارسال رایگان بیشتر، ویژه سوپرمارکت</p>
                    <p className="text-[12px] mt-2 text-[#CAD4CB]">پشتیبانی اختصاصی</p>
                    <p className="text-[12px] mt-2 text-[#CAD4CB]"> ارسال فوری برای شهر تهران (رایگان)</p>


                    <div className="mt-4 bg-slate-700 flex flex-row justify-between" >
                        <a className=" text-[#19C5E0] flex flex-row mt-5" href="">
                            <p>خرید اشتراک</p>
                            <Icon icon={ic_navigate_before_twotone} size={20} />
                        </a>
                        <img src={free_delivery} alt="" />

                       
                        
                    </div>
                </div>
                </div>
           </div>
           <div className="w-[45%] h-[80vh] mt-[80px] bg-[#F7F7F7] border border-2 border-[#b5b5b5] rounded-lg p-3">
                <p className="text-[black] font-bold">فروشنده</p>
                <div className="bg-[green] mt-4 flex flex-row gap-5">
                    <Icon icon={ic_store_outline} size={25} className="text-[#424750]" />
                    <p className="text-[15px]">{productshow.store} </p>
                    <p className="text-[12px] text-[#00A049]">منتخب</p>       
                    
                </div>
                <div className="bg-[orange] mt-3 flex flex-row gap-9">
                    <div className="flex flex-row gap-2 ">
                        <p className="text-[#00A049] text-[12px]">{productshow.pleasent}</p>
                        <p className="text-[12px]">رضایت از کالا</p>
                    </div>
                    <div className="flex flex-row gap-2 ">
                    <p className="text-[12px]"> عملکرد </p>

                        <p className="text-[#00A049] text-[12px]">{productshow.performance}</p>
                    </div>
                </div>
                

                <div className="line bg-[#c2c2c2] w-[95%] h-[2px] mx-auto mt-10"></div>
                
                <div className="flex flex-row justify-between bg-slate-400 mt-5">

                    <Icon icon={ic_error_outline_twotone} />
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div class="flex items-center justify-end w-full gap-1">
                                <span class="line-through text-body-2 ml-1 text-neutral-300" >
                                    {productshow.price}
                                </span>
                                <div class="px-1 text-white rounded-xl flex items-center justify-center bg-[red]">
                                    <span class="text-[12px]">
                                            ۳۳٪
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <p>
                                
                                {productshow.price} 
                                <span className="text-[12px]">تومان</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-slate-500 mt-5">
                    <p>۵۰۰+ نفر به این کالا علاقه دارند</p>
                
                </div>
           </div>
    
    </> );
}
 
export default PartLeftItemShow ;