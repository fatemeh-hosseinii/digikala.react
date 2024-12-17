import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_one } from "../../Redux/StorySlice";
import Storyitem from "./Storyitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Story.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Story = () => {
  const { story, loading, error } = useSelector((state) => state.story);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchpost_one());
    }, 2000);
  }, [dispatch]);

  if (error) return <p aria-live="assertive">Error occurred: {error}</p>;

  return (
    <div className="mySwiper mt-[20px] h-[100%] w-[100%]">
      {loading ? (
        <div className="flex gap-8">
          {/* تعداد اسکلتون‌ها متناسب با تعداد اسلایدها */}
          {Array.from({ length:12 }).map((index) => (
            <div key={index} className="flex flex-col items-center">
              {/* اسکلتون دایره‌ای برای عکس */}
              <Skeleton circle={true} height={80} width={80} />
              {/* اسکلتون معمولی برای متن */}
              <Skeleton width={60} height={10} style={{ marginTop: "8px" }} />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          navigation
          modules={[Navigation]}
          breakpoints={{
            1200: { slidesPerView: 12 },
            1100: { slidesPerView: 11 },
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
        >
          {story?.map((elem) => (
            <SwiperSlide key={elem.id} className="p-1">
              <Storyitem story={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Story;
