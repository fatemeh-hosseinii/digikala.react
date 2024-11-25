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
import resamazing from  "../../Media/incredibleres.png"
const AmazingProduct = () => {
    const {AmazingProduct,loading,error}=useSelector(state=>state.AmazingProduct)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchpost_five())
    },[])
    return ( <>
    <div className=" p-5">

        <div className="bg-[#d92f4e] rounded-xl  lg:flex hidden flex-row  justify-center items-center p-2">
            <div className="flex flex-col justify-around items-center  w-[18%] p-1">
                <img src={imgamazing} className="w-[50%]" alt="" />
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
                <img src={imgamazing2}  className="w-[45%] mt-2" alt="" />
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
                className="mySwiper w-[100%] h-[100%] mt-[20px] "
                >
                {AmazingProduct?.map((elem) => (
                    <SwiperSlide key={elem.id} className="p-1  flex flex-row   bg-white">
                        <AmazingDtails product={elem} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>


     
    </div>
    <div className="bg-[#d92f4e] lg:hidden rounded-md flex w-[100%] flex-col p-2">
            <div className="flex flex-row justify-between items-start  w-[100%] p-3">
                <div className="flex flex-row w-[70%] gap-2 ">
                    <div className="w-[10%]  sm:w-[5%] ">
                        <img src={imgamazing2}  className=" mt-2" alt="" /> 
                    </div>
                    <div className="sm:w-[16%]  mt-3">
                        <img src={resamazing} className="w-[100%]" alt="" />
                        
                    </div>
                    <div className=" w-[30%] flex flex-row gap-1 mt-2">
                    <div class="flex gap-[2px]  items-center right-0 h-6 order-3 lg:order-2">
                        <div class="flex flex-col rounded-md items-center justify-center bg-white w-[26px] h-[26px] ">
                            <div class="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]">
                                ۱۴ 
                            </div>
                        </div>
                        <div class="text-subtitle-strong text-white w-1">
                            :
                        </div>
                        <div class="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-md">
                            <div class="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]"> 
                                ۰۳ 
                            </div>
                        </div>
                        <div class="text-subtitle-strong text-white w-1">
                            :
                        </div>
                        <div class="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-md">
                            <div class="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]"> 
                                ۱۳
                            </div>
                        </div>
                    </div>
                     
                    </div>
                    
                </div>
                <div className=" w-[30%] flex flex-row justify-end mt-2">
                <a className="flex flex-row  items-center ">
                    <p className="text-[white] text-[12px] mt-1">مشاهده همه</p>
                    <Icon icon={ic_keyboard_arrow_left_twotone} size={"16px"} className="text-[white]" />
                </a>
              </div>
                  
            </div>
            <Swiper 
                navigation 
                modules={[Navigation]} 
                breakpoints={{
        
                    380:{
                        slidesPerView:2.5
                    },
                    460:{
                        slidesPerView:3,
                    },
                    552:{
                        slidesPerView:4
                    },
                    666:{
                        slidesPerView:5
                    },
                    777:{
                        slidesPerView:5.5
                    },
                    888:{
                        slidesPerView:6.5
                    },
                    960:{
                        slidesPerView:7
                    }
                  }}
                spaceBetween={5}
                className="mySwiper w-[100%] h-[100%] mt-[20px] "
                >
                {AmazingProduct?.map((elem) => (
                    <SwiperSlide key={elem.id} className="p-1  flex flex-row   bg-white">
                        <AmazingDtails product={elem} />
                    </SwiperSlide>
                ))}
            </Swiper>
          


        </div>
        
    
    </> );
}
 
export default AmazingProduct;