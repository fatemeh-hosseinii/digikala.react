import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect } from "react";
import Slideritem from "./Slideritem";
import { fetchpost_two } from "../../Redux/SliderSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Slider = () => {
  const { slider, loading, error } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchpost_two());
    }, 2000);
  }, [dispatch]);

  if (error) return <p aria-live="assertive">Error occurred: {error}</p>;

  return (
    <>
      {loading ? (
        <div className="flex gap-4">
          {Array.from({ length: 1 }).map((_, index) => (
            <div key={index} className="w-full">
              <Skeleton height={350} className="rounded-lg" />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          className="mt-[20px]"
        >
          {slider?.map((elem) => (
            <SwiperSlide key={elem.id} className="p-1">
              <Slideritem slider={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
