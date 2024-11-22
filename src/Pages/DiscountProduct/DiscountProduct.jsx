import Icon from "react-icons-kit";
import { percent } from "react-icons-kit/fa/percent";
import {tags} from 'react-icons-kit/ikons/tags'
import DiscountPItem from "./DiscountPItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpost_DiscountP } from "../../Redux/DiscountProductSlice";

const DiscountProduct = () => {
    const {DiscountP,loading,error}=useSelector(state=>state.DiscountP)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_DiscountP())
    },[])
    return ( <>
    <div className="p-4">
        <div className=' flex flex-col rounded-lg border-[#E0E0E2] border-[1px] p-2'>
            <div className=" text-center w-[100%] flex flex-row justify-center">
                <div className="flex flex-row gap-2">
                    <Icon className="text-[#EF4056]" icon={tags} size={20}/>
                    <p className="text-[19px]">منتخب محصولات تخفیف و حراج</p>

                </div>
            </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 ">
               {DiscountP?.map((elem)=>{
                return  <div className=" border-l-[1px] border-b-[1px] border-[#E0E0E2] p-4">
                    <DiscountPItem key={elem.id} product={elem} />
                </div>
               })}            
            </div>
        </div>
       
        
    </div>
    </> );
}
 
export default DiscountProduct;