import imgamazing from  "../../Media/Amazings.png"
import imgamazing2 from  "../../Media/Amazing.png"
import {ic_keyboard_arrow_left_twotone} from 'react-icons-kit/md/ic_keyboard_arrow_left_twotone'
import Icon from "react-icons-kit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpost_five } from "../../Redux/AmazingProductSlice";

import AmazingDtails from "./AmazingDtails";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const AmazingProduct = () => {
    const {AmazingProduct,loading,error}=useSelector(state=>state.AmazingProduct)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchpost_five())
    },[])
    return ( <>
    <div className=" p-5">

        <div className="bg-[#d92f4e] rounded-lg flex flex-row p-3">
            <div className="flex flex-col justify-around items-start  w-[20%] p-4">
                <img src={imgamazing} className="w-[74%]" alt="" />
                <div class="flex items-center right-0 h-6 mt-4">
                    <div class="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-md">
                        <div class="flex justify-center items-center font-bold text-[15px] text-neutral-800 text-center w-[20px] h-[20px]">
                            ۲۶ 

                        </div>
                    </div>
                    <div class="text-subtitle-strong text-white w-1">:</div>
                    <div class="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-md p-2">
                        <div class="flex justify-center items-center font-bold text-[15px] text-neutral-800 text-center w-[20px] h-[20px]"> 
                            ۴۴ 
                        </div>
                    </div>
                    <div class="text-subtitle-strong text-white w-1">
                            :
                    </div>
                    <div class="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-md">
                        <div class="flex justify-center items-center font-bold text-neutral-800 text-center text-[15px] w-[20px] h-[20px]">
                            ۰۸
                        </div>
                    </div>
                </div>
                <img src={imgamazing2}  className="w-[55%] mt-2" alt="" />
                <a className="flex flex-row  items-center justify-between">
                    <p className="text-[white] text-[12px] mt-1">مشاهده همه</p>
                    <Icon icon={ic_keyboard_arrow_left_twotone} size={"16px"} className="text-[white]" />
                </a>
            </div>
            <Swiper 
                navigation 
                modules={[Navigation]} 
                slidesPerView={7}
                spaceBetween={5}
                className="mt-[20px] "
                >
                {AmazingProduct?.map((elem) => (
                    <SwiperSlide key={elem.id} className="p-1  flex flex-row   bg-white">
                        <AmazingDtails product={elem} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        
    </div>
    
    </> );
}
 
export default AmazingProduct;