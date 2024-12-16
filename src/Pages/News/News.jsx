import Icon from "react-icons-kit";
import { ic_local_fire_department } from "react-icons-kit/md/ic_local_fire_department";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpost_News } from "../../Redux/NewsSlice";
const News = () => {
    const {News,loading,error}=useSelector(state=>state.News)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_News())
    },[])
    const groupedItems = [];
        for (let i = 0; i < News.length; i += 3) {
        groupedItems.push(News.slice(i, i + 3));
    }

    return ( <>
        <div className="p-3">
            <div className=" rounded-lg p-4 flex flex-col border-2 border-[#F0F0F1]">
                <div className=" w-[100%] flex flex-row justify-center ">
                    
                  <div className=" flex flex-row gap-2  justify-center   lg:w-[25%] w-[60%] text-center">
                    <h2 className="lg:text-[20px] text-[11px]">داغ ترین چند ساعت گذشته</h2>
                    <Icon icon={ic_local_fire_department} className="text-[yellow]" size={20}/>

                  </div>
                       
                   
                  
                </div>
                
                <Swiper 
                     modules={[Navigation]}
                    //  slidesPerView={4}
                    breakpoints={{
        
                      
                      870: {
                          slidesPerView: 4,
                      },
                      770: {
                          slidesPerView: 3.5,
                        },
                      660: {
                        slidesPerView: 3,
                      },
                      550:{
                        slidesPerView:2.5  
                      },
                      450: {
                        slidesPerView:2,
                      },
                    
                      380: {
                        slidesPerView: 1.5,
                      },
                    }}
                     spaceBetween={20}
                     navigation
                    className="mySwiper mt-[20px] h-[100%] w-[100%] "
                    >
                    {
                        groupedItems?.map((group,index)=>{
                            return(
                                <Swiper 
                                modules={[Navigation]}
                                breakpoints={{
        
                      
                                  870: {
                                      slidesPerView: 4,
                                  },
                                  770: {
                                      slidesPerView: 3.5,
                                    },
                                  660: {
                                    slidesPerView: 3,
                                  },
                                  550:{
                                    slidesPerView:2.5  
                                  },
                                  450: {
                                    slidesPerView:2,
                                  },
                                
                                  380: {
                                    slidesPerView: 1.5,
                                  },
                                }}
                                spaceBetween={20}
                                navigation
                                className="mySwiper mt-[20px] h-[100%] w-[100%]"
                              >
                                {groupedItems?.map((group, index) => (
                                  <SwiperSlide
                                    key={index}
                                    className="flex flex-col gap-5 justify-center items-center p-2 h-full"
                                  >
                                    {group.map((elem, elemIndex) => (
                                      <div key={elemIndex}>
                                        <div className="flex flex-row gap-2 mt-5">
                                          <img className="w-[30%]" src={elem.image} alt="" />
                                          <span className="text-[#37BFD3] mt-3 text-[28px] font-bold">
                                            {elem.number}
                                          </span>
                                          <p className="text-[11px] mt-3">{elem.title}</p>
                                        </div>
                                  
                                        {elemIndex !== group.length - 1 && <hr className="mt-3" />}
                                      </div>
                                    ))}
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                              
                                
                            )
                        })
                    }    
                 </Swiper>
    
            </div>
            
        </div>
    </> );
}
 
export default News;