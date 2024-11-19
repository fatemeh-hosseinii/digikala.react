import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_eight } from "../../Redux/ProductpackagSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

const Productpakaging = () => {
  const { productpackage, error, loading } = useSelector((state) => state.Productpackag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpost_eight());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product packages: {error.message}</div>;

  const groupedItems = [];
  for (let i = 0; i < productpackage?.length; i += 2) {
    groupedItems.push(productpackage.slice(i, i + 2));
  }

  return (
    <div className="p-3">
      <div className="flex flex-col justify-center items-center xl:container p-2 ">
        <h2 className="text-center text-[19px] font-bold">خرید بر اساس دسته‌بندی</h2>
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            1200:{
                slidesPerView:8
            },
            680:{
                slidesPerView:6.5
            },
            580:{
                slidesPerView:5.5
            },
            480:{
                slidesPerView:4.5
            },
            380: {
              slidesPerView: 3.5,
            },
          }}
          spaceBetween={20}
          navigation
          className="mySwiper mt-[20px] h-[100%] w-[100%]"
        >
          {groupedItems?.map((group, index) => (
            <SwiperSlide key={index} className=" flex flex-col  justify-center items-center  p-2 h-full">
              {group.map((elem) => (
               <div className="flex flex-col lg:w-[70%] w-[100%] gap-2 mt-5 items-center">
                    <img src={elem.image} />
                                  
                    <p className="lg:text-[12px] md:text-[11px] text-[10px] text-center font-bold">{elem.title}</p>
                                   
                </div>
              ))}
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Productpakaging;

















