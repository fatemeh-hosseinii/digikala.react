import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_seven } from "../../../Redux/BaneroneSlice";

const BanerOne = () => {
    const{BanerOne,loading,error}=useSelector(state=>state.BaneroneSlice)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_seven())
    })
    return ( <>
    <div className=" p-5 flex flex-row justify-around">
       {
            BanerOne?.map((elem)=>{
                return(
                    <div className="w-[24%]">
                         <img className="rounded-xl" src={elem.image} key={elem.id}/>
                    </div>
                   
                );
            })
       }
    

    </div>
        
    </> );
}
 
export default BanerOne;