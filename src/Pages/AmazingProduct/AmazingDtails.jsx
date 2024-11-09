import { Link } from "react-router-dom";

const AmazingDtails = ({product}) => {
    return ( <>
    <Link className="" to={`/${product.id}`} >
         <div className="flex flex-col justify-between items-center">
            <img src={product.image} alt="" />
            <p className="text-[11px] line-clamp-2 mt-5">{product.title}</p>
            <div class=" mt-[5px]  flex w-full items-center justify-between gap-[4px]">
            <div class="px-2 text-white bg-[#D32F2F] rounded-xl flex items-center justify-center ProductPrice_ProductPrice__discountWrapper__1Ru_1 bg-hint-object-error"><span class="text-[12px]">۱۰٪</span>
            </div>
                <div class="flex h-[50px] flex-col items-end justify-end leading-none">
                   
                    <div class=" flex flex-row items-center gap-[3px] text-[20px] font-bold ">
                        <span class="text-[12px] text-[#434B48] group-hover:text-white font-bold" >{product.price}</span>
                        <span class="text-[12px] text-[#434B48]">تومان</span>
                    </div>
                    <div class="flex gap-[5px] mt-[10px] text-[11px] text-medium_grey">
                        <span class="line-through text-[#C0C2C5]">{product.discount}</span>
                        <span class="text-[10px] text-[#C0C2C5]">تومان</span>
                    </div>
                </div>
            </div>
         </div>
    
        
    </Link>
    
    </> );
}
 
export default AmazingDtails;