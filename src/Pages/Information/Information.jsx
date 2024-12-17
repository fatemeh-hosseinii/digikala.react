import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Informationitem from "./Informationitem";
import Moreinformation from "./Moreinformation";
import { fetchpost_tree } from "../../Redux/InformationSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Information = () => {
  const { information, loading, error } = useSelector((state) => state.information);
  const dispatch = useDispatch();

  useEffect(() => {
   setTimeout(() => {
    dispatch(fetchpost_tree());
   }, 2000);
  }, [dispatch]);

  if (error) return <p className="text-red-500">Error occurred: {error}</p>;

  return (
    <>
      {loading ? (
        <div className="p-5 mt-5 flex gap-4 flex-wrap justify-between">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Skeleton circle={true} height={80} width={80} />
              <Skeleton width={60} height={10} />
            </div>
          ))}
        </div>
      ) : (
        <div className="p-5 mt-5 flex flex-row justify-between">
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              1200: { slidesPerView: 9 },
              1100: { slidesPerView: 8 },
              870: { slidesPerView: 8.5 },
              770: { slidesPerView: 8 },
              670: { slidesPerView: 6 },
              600: { slidesPerView: 5.5 },
              572: { slidesPerView: 5 },
              450: { slidesPerView: 4.5 },
              420: { slidesPerView: 4 },
              380: { slidesPerView: 3.5 },
              370: { slidesPerView: 3},

            }}
            spaceBetween={20}
            className="mt-[20px]"
          >
            {information.map((elem) => (
              <SwiperSlide key={elem.id}>
                <Informationitem information={elem} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mr-[20px] mt-5">
            <Moreinformation />
          </div>

        </div>
      )}
    </>
  );
};

export default Information;
