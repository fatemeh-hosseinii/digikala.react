import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import { useEffect } from "react";

import Slideritem from "./Slideritem";
import { fetchpost_two } from "../../Redux/SliderSlice";

const Slider = () => {
    const {slider,loading,error}=useSelector(state=>state.slider)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_two())
    },[])
    if (loading) return <p aria-live="polite">Loading...</p>;
    if (error) return <p aria-live="assertive">Error occurred: {error}</p>;
    return ( 
      <>
        <Swiper 
        modules={[Navigation]} 
        slidesPerView={1}
        spaceBetween={20}
        className="mt-[20px] "
        >
            {slider?.map((elem) => (
                <SwiperSlide key={elem.id} className="p-1">
                    <Slideritem slider={elem} />
                </SwiperSlide>
            ))}
        </Swiper>
      </>
    );
}
 
export default Slider;