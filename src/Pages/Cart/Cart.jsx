import { NavLink, useLocation, useParams } from "react-router-dom";
import fa from "../../Media/fa.png"
import Icon from "react-icons-kit";
import { ic_navigate_before_twotone } from 'react-icons-kit/md/ic_navigate_before_twotone';
import lam from "../../Media/lam.png"
import spicker from '../../Media/spicker.png'
import hedphone from "../../Media/hedphone.png"
import DetailsCart from './DetailsCart'
import Totalprice from "./Totalprice";
import TotalTitleprice from "./TotalTitleprice";
import { useSelector } from "react-redux";
const Cart = () => {
   

   const location = useLocation();
   const defaultActive = location.pathname.startsWith('/Cart');
   const{items}=useSelector(state=>state.Cart)
   console.log("i",items);
   

  return (
    <>
    <div>
    <nav className="container flex flex-row gap-5 mt-2">
            <NavLink
                to='/productstwo/Cart/:id'
                className={({ isActive }) =>
                    isActive || defaultActive
                        ? "text-[16px] border-b-2 border-[red] p-3 text-[red] font-bold active"
                        : "text-[18px] p-3 text-[#81858B] font-bold"
                }
            >
                <p className="mt-3">سبد خرید</p>
            </NavLink>
            <NavLink
                to='/some-other-page'
                className={({ isActive }) =>
                    isActive
                        ? "text-[16px] border-b-3 border-[red] p-3 text-[red] font-bold"
                        : "text-[18px] p-3 text-[#81858B] font-bold"
                }
            >
                <p className="mt-3">بعدی</p>
            </NavLink>
    </nav>



        <hr className="container mt-0"  />
        <div className=" flex lg:flex-row flex-col gap-7 mt-5 rounded-lg  container p-4">
            <div className="  lg:w-[70%] w-[100%] p-3">
                <div className=" border-2 flex lg:flex-row flex-col rounded-lg border-[#B12BA4] w-[100%] p-2">
                    <div className="lg:w-[50%]   flex flex-col p-2 gap-6">
                        <div className="lg:w-[30%] w-[25%]">
                            <img src={fa} alt="" />
                            
                        </div>
                        <p className="font-bold text-[#858296]">خدمات ویژه با اشتراک پلاس</p>
                        <div>
                            <button className=" border-2 border-[#B12BA4] lg:px-2 lg:py-2 p-2 gap-2 rounded-lg flex flex-row">
                                <p className="text-[13px] text-[#B12BA4] mt-1">افزودن پلاس به سبد خرید</p>
                                <Icon className="text-[#B12BA4]" icon={ic_navigate_before_twotone} size={23} />
                               

                            </button>

                        </div>
                    </div>
                    <div className="lg:w-[55%] w-[100%] mt-5  ">
                    <ul className="lg:list-disc lg:pl-5">
                        <li className="text-purple-500">
                            <p className="text-[11px] text-[#81858B]">
                            ۴ ارسال رایگان عادی
                            </p>
                        </li>
                        <li className="text-purple-500">
                            <p className="text-[11px] text-[#81858B]">
                            ۲ ارسال سوپرمارکت
                            </p>
                        </li>
                        <li className="text-purple-500">
                            <p className="text-[11px] text-[#81858B]">
                            پشتیبانی اختصاصی
                            </p>
                        </li>
                        <li className="text-purple-500">
                            <p className="text-[11px] text-[#81858B]">
                            مهلت بیشتر مرجوعی کالا تا ۳۰ روز (به‌جز موبایل و کالای بهداشتی)
                            </p>
                        </li>
                        <li className="text-purple-500">
                            <p className="text-[11px] text-[#81858B]">
                            امکان ارسال فوری بعضی از کالاها ( رایگان ):
                            </p>
                        </li>
                    </ul>
                    <div className=" flex flex-row w-[25%] mt-2 gap-2">
                        <div className="w-[30%]">
                            <img src={lam} alt="" />
                            
                        </div>
                        <div className="w-[30%]">
                            <img src={spicker} alt="" />
                            
                        </div>
                        <div className="w-[30%]">
                            <img src={hedphone} alt="" />
                            
                        </div>

                    </div>

                    </div>
                </div>
                <div className=" lg:border-2 flex flex-col gap-2 border-[#c7c8cb] rounded-lg mt-5 p-3">
                    <p className="text-[black] font-bold">سبد خرید شما</p>
                    <p className="text-[#85879A] text-[12px]">۱ کالا</p>
                    {
                        items?.map((elem)=>{
                           return<>
                           <DetailsCart product={elem} index={elem.id} key={elem.id}/>
                           
                           </> 
                        })
                    }
                    
                </div>
                
            </div>
            <div className="  flex flex-col lg:w-[30%] w-[100%]  justify-center items-center ">
                <Totalprice/>
                <TotalTitleprice/>
            </div>
        </div>

    </div>
    
     
    </>
  );
};
export default Cart;

