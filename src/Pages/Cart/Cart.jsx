import { NavLink, useLocation, useParams } from "react-router-dom";
import fa from "../../Media/fa.png"
import Icon from "react-icons-kit";
import { ic_navigate_before_twotone } from 'react-icons-kit/md/ic_navigate_before_twotone';
import lam from "../../Media/lam.png"
import spicker from '../../Media/spicker.png'
import hedphone from "../../Media/hedphone.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_singleproduct } from "../../Redux/SingleProductSlice";
import { useEffect } from "react";
import DetailsCart from "./DetailsCart";
const Cart = () => {
    const { id } = useParams();
    const { SingleProduct, loading, error } = useSelector(state => state.singleproduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost_singleproduct(id));
    }, [dispatch, id]);

    if (loading) return <div>در حال بارگذاری...</div>;
    if (error) return <div>خطا در بارگذاری محصول: {error.message}</div>;

    const product = SingleProduct?.find((elem) => elem.id === id);
    

    if (!product) return <div>محصول یافت نشد</div>;

   const location = useLocation();
   const defaultActive = location.pathname.startsWith('/productstwo/Cart');
//    const product = SingleProduct?.find((elem) => elem.id === id);

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
        <div className="bg-slate-600 flex flex-row gap-7 mt-5 border-2 rounded-lg border-[#E0E0E2] container p-4">
            <div className=" bg-slate-800 border-2 w-[70%] p-3">
                <div className=" border-2 flex flex-row rounded-lg border-[#B12BA4] w-[100%] p-2">
                    <div className="w-[50%] flex flex-col bg-[white] p-2 gap-6">
                        <div className="w-[30%]">
                            <img src={fa} alt="" />
                            
                        </div>
                        <p className="font-bold text-[#858296]">خدمات ویژه با اشتراک پلاس</p>
                        <div>
                            <button className=" border-2 border-[#B12BA4] px-2 py-2 gap-2 rounded-lg flex flex-row">
                                <p className="text-[13px] text-[#B12BA4] mt-1">افزودن پلاس به سبد خرید</p>
                                <Icon className="text-[#B12BA4]" icon={ic_navigate_before_twotone} size={23} />
                               

                            </button>

                        </div>
                    </div>
                    <div className="w-[55%] bg-[white]">
                    <ul className="list-disc pl-5">
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
                    <div className="bg-[yellow] flex flex-row w-[25%] mt-2 gap-2">
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
                <div className=" border-2 flex flex-col gap-2 border-[#c7c8cb] rounded-lg mt-5 p-3">
                    <p className="text-[black] font-bold">سبد خرید شما</p>
                    <p className="text-[#85879A] text-[12px]">۱ کالا</p>
                    <DetailsCart product={product} key={product.id} />
                </div>
            </div>
            <div className=" bg-[red] w-[30%] ">
            </div>
        </div>

    </div>
    
     
    </>
  );
};
export default Cart;