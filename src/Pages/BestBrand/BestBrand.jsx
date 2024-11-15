import Icon from 'react-icons-kit';
import { ic_grade_outline } from 'react-icons-kit/md/ic_grade_outline';
import { useDispatch, useSelector } from 'react-redux';
import BestBrandItem from './BestBrandItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import { fetchpost_ten } from '../../Redux/BestbrandSlice';

const BestBrand = () => {
    const { Bestbrand } = useSelector(state => state.Bestbrand);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost_ten());
    }, [dispatch]);

    return (
        <div className='w-[100%] p-5 mt-10 container gap-3 rounded-lg flex flex-col justify-center lg:border-2 lg:border-[#e1e1e1] border-3 border-[white]'>
                <div className='flex flex-row justify-center gap-2 items-center mx-auto  lg:w-[20%] w-[50%]'>
                    <Icon icon={ic_grade_outline} className='text-[yellow]' size={24}/>
                    <p className='text-center lg:text-[19px] text-[15px]'>محبوب ترین برندها</p>
                    
                </div>
                <Swiper
                    breakpoints={{
                        1000:{
                            slidesPerView:9
                        },
                        990:{
                            slidesPerView:8.5
                        },
                        880:{
                            slidesPerView:8
                        },
                        770:{
                            slidesPerView:7
                        },
                        660:{
                            slidesPerView:6.5,
                        },
                        590:{
                            slidesPerView:5.5
                        },
                        550:{
                            slidesPerView:5,
                        },
                        480: {
                        slidesPerView: 4.5,
                        },
                        440: {
                        slidesPerView: 4,
                        },
                        380: {
                        slidesPerView: 3.5,
                        },
                    }}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper w-full h-full mt-2"
                    >
                    {Bestbrand?.map((elem) => (
                        <SwiperSlide key={elem.id} className="p-1">
                        <BestBrandItem BestBrand={elem} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            
        </div>
    );
};

export default BestBrand;
