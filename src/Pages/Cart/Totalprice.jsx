import Icon from "react-icons-kit";
import pointclub from "../../Media/club-point.png"
import { ic_error_outline_twotone } from 'react-icons-kit/md/ic_error_outline_twotone';
const Totalprice = () => {
    return (  <>
        <div className="flex flex-col border-[1px] border-[] w-[90%] rounded-md ">
           <div className="p-3">
                <div className="flex flex-row justify-between ">
                    <p className="text-[#808389] text-[13px]">قیمت کالاها (۳)</p>
                    <p className="text-[#808389] text-[15px]">۱۷,۸۲۹,۰۰۰تومان</p>
                </div>
                <div className="flex flex-row justify-between  mt-5">
                    <p className="text-[#3D3F63] text-[13px]">جمع سبد خرید</p>
                    <p className="text-[#3D3F63] text-[15px]">۴,۲۲۴,۰۰۰تومان</p>
                </div>
                <div className="flex flex-row justify-between mt-5">
                    <p className="text-[red] text-[13px]">سود شما از خرید</p>
                    <p className="text-[#3D3F63] text-[15px]">(۷۷٪)۱۳,۶۰۵,۰۰۰تومان</p>
                </div>
                <div className="flex flex-row justify-center mt-5 p-2">
                    <button className="bg-[#EF4056]  w-[85%] rounded-md py-3 px-3"> 
                        <p className="text-[white] text-[15px]">تایید و تکمیل سفارش</p>
                    </button>
                </div>
           </div>
            <div className="bg-[#F0F0F1] mt-5 p-4 rounded-b-md">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2">
                        <img src={pointclub} className="mt-1" alt="" />
                        <p className="text-[12px] mt-1">دیجی‌کلاب</p>
                        <Icon className="text-[14px] text-[#A1A3A8]" icon={ic_error_outline_twotone}/>
                    </div>
                    <div className="flex flex-row gap-2">
                        <p>۱۵۰</p>

                        <p className="text-[12px] mt-1">امتیاز</p>
                    </div>
                    
                </div>
            </div>          
        </div>   
    </>);
}
 
export default Totalprice;