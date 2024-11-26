import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_seven } from "../../../Redux/BaneroneSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BanerOne = () => {
    const{BanerOne,loading,error}=useSelector(state=>state.BaneroneSlice)
    const dispatch=useDispatch()
    useEffect(()=>{
        setTimeout(() => {

         dispatch(fetchpost_seven())
            
        }, 2000);
    },[])
    return ( <>
    {
        loading?(
            <div className="flex gap-10 container mt-5">
            {Array.from({ length: 4}).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                <Skeleton className="rounded-lg"  height={200} width={290} />
                </div>
            ))}
            </div>
        ):(
            <div className=" p-5 flex lg:flex-row  justify-around lg:gap-0  gap-3 flex-wrap">
            {
                 BanerOne?.map((elem)=>{
                     return(
                         <div className="lg:w-[24%] w-[48%]">
                              <img className="rounded-xl" src={elem.image} key={elem.id}/>
                         </div>
                        
                     );
                 })
            }
         
     
         </div>
                
        ) 
    }
   
    </> );
}
 
export default BanerOne;