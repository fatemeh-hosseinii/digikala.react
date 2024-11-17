import Icon from "react-icons-kit";
import { ic_local_fire_department } from "react-icons-kit/md/ic_local_fire_department";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import loden from "../../Media/loden.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpost_Bestsell } from "../../Redux/BestsellingSlice";
const Bestselling = () => {
    const {Bestsell,loading,error}=useSelector(state=>state.Bestsell)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_Bestsell())
    },[])
    const groupedItems = [];
        for (let i = 0; i < Bestsell.length; i += 3) {
        groupedItems.push(Bestsell.slice(i, i + 3));
    }

    return ( <>
        <div className="p-3">
            <div className=" rounded-lg p-4 flex flex-col border-2 border-[#F0F0F1]">
                <div className=" w-[100%] flex flex-row justify-between ">
                    <div className="text-center flex flex-row w-[90%]  justify-center">
                        <h2 className="text-[20px]">پر فروش ترین کالاها</h2>
                        <Icon icon={ic_local_fire_department} className="text-[yellow]" size={20}/>
                    </div>
                    <div>
                        <p className="text-[#37BFD3]">مشاهده همه</p>
                    </div>
                </div>
                
                <Swiper 
                     modules={[Navigation]}
                     slidesPerView={4}
                     spaceBetween={20}
                     navigation
                    className="mySwiper mt-[20px] h-[100%] w-[100%] "
                    >
                    {
                        groupedItems?.map((group,index)=>{
                            return(
                                <SwiperSlide className="flex flex-col gap-5 justify-center items-center p-2  h-full">
                                    
                                    {
                                        group.map((elem)=>{
                                            return(
                                                <>
                                                      <div className=" flex flex-row gap-2 mt-5">

                                                        <img className="w-[30%]" src={elem.image} alt=""/>
                                                        <span className="text-[#37BFD3] mt-3 text-[28px] font-bold">{elem.number}</span>
                                                        <p className="text-[11px] mt-3 ">  {elem.title} </p>
                                                    </div>  
                                                    <hr  className="mt-3"/>
                                                </>
                                              
                                                 
                                            )
                                        })
                                    }
                                </SwiperSlide>
                                
                            )
                        })
                    }    
                 </Swiper>
    
            </div>
            
        </div>
    </> );
}
 
export default Bestselling;