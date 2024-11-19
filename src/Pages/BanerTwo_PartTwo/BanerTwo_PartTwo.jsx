import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import {fetchpost_eleven} from "../../Redux/BanerTwo_PartTwoSlice"
const BanerTwo_PartTwo = () => {
    const {BanerTwo_PartTwo,loading,error}=useSelector(state=>state.BrandTwoPartTwoSlice)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_eleven())
    },[])

    return ( <>
        <div className=" p-4">

            <div className=" flex lg:flex-row flex-col gap-4 justify-around">
                {
                    BanerTwo_PartTwo.map((elem)=>{
                       return(
                        <img className="lg:w-[49%] w-[100%] rounded-xl" src={elem.image} alt=""/>
                       )
                        
                    })
                }
                
            </div>
        </div>
    
    </> );
}
 
export default BanerTwo_PartTwo;