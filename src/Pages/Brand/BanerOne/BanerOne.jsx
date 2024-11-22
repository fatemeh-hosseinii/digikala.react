import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_seven } from "../../../Redux/BaneroneSlice";

const BanerOne = () => {
    const{BanerOne,loading,error}=useSelector(state=>state.BaneroneSlice)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_seven())
    },[])
    return ( <>
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
        
    </> );
}
 
export default BanerOne;