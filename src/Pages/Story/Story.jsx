import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_one } from "../../Redux/StorySlice";
import Storyitem from "./Storyitem";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import"./Story.module.css"

const Story = () => {
    const { story, loading, error } = useSelector(state => state.story);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost_one());
    }, [dispatch]);

    if (loading) return <p aria-live="polite">Loading...</p>;
    if (error) return <p aria-live="assertive">Error occurred: {error}</p>;

    return (
        <Swiper 
        navigation 
        modules={[Navigation]} 
        breakpoints={{
            // برای صفحه‌نمایش‌های بزرگتر از 1200px (شما می‌توانید این مقدار را تغییر دهید)
            1200:{
                slidesPerView:12,
            },
            1100:{
                slidesPerView:11,
            },
            870: {
                slidesPerView: 8.5,
              },
            770: {
                slidesPerView: 8,
              },
            670: {
                slidesPerView: 6,
              },
            600: {
              slidesPerView: 5.5,
            },
            // برای صفحه‌نمایش‌های بزرگتر از 1024px
            572: {
              slidesPerView: 5,
            },
            // برای صفحه‌نمایش‌های بزرگتر از 768px
            450: {
              slidesPerView: 4.5,
            },
            // برای صفحه‌نمایش‌های کوچک‌تر از 768px
            420: {
              slidesPerView: 4,
            },
            // برای صفحه‌نمایش‌های موبایل
            380: {
              slidesPerView: 3.5,
            },
          }}
        spaceBetween={20}
        className="mt-[20px] "
        >
            {story?.map((elem) => (
                <SwiperSlide key={elem.id} className="p-1">
                    <Storyitem story={elem} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Story;
