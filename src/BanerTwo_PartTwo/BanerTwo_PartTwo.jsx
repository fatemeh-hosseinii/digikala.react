import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchpost_eleven } from "../Redux/BanerTwo_PartTwoSlice";

const BanerTwo_PartTwo = () => {
    const {BanerTwo_PartTwo,loading,error}=useSelector(state=>state.BrandTwoPartTwoSlice)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_eleven())
    },[])

    return ( <>
        <div className="bg-rose-700 p-4">

            <div className="bg-gray-700 flex flex-row justify-around">
                {
                    BanerTwo_PartTwo.map((elem)=>{
                       return(
                        <img className="w-[49%] rounded-xl" src={elem.image} alt=""/>
                       )
                        
                    })
                }
                
            </div>
        </div>
    
    </> );
}
 
export default BanerTwo_PartTwo;