import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Informationitem from "./Informationitem";
import Moreinformation from "./Moreinformation";
import { fetchpost_tree } from "../../Redux/InformationSlice";

const Information = () => {
    const { information, loading, error } = useSelector((state) => state.information);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost_tree());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error occurred: {error}</p>;
   

    return (
        <div className="p-5 mt-5 flex flex-row justify-between">
            <Swiper 
                
                modules={[Navigation]} 
                breakpoints={{
        
                    1200:{
                        slidesPerView:9,
                    },
                    1100:{
                        slidesPerView:8,
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
                
                    572: {
                      slidesPerView: 5,
                    },
                    450: {
                      slidesPerView: 4.5,
                    },
                    420: {
                      slidesPerView: 4,
                    },
                    380: {
                      slidesPerView: 3.5,
                    },
                  }}
                spaceBetween={20}
                className="mt-[20px]"
            >
                {information.map((elem) => (
                    <SwiperSlide key={elem.id} className="">
                        <Informationitem key={elem.id} information={elem} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mr-[20px] mt-5">
                <Moreinformation />
            </div>
        </div>
    );
};

export default Information;

