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
        slidesPerView={12}
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
