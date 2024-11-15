import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_nine } from "../../Redux/BanertwoSlice";

const Banertwo = () => {
    const {BanerTwo,loading,error}=useSelector(state=>state.BanerTwo)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_nine())
    },[])

    return ( <>
        <div className="= p-4">

            <div className="flex flex-row justify-around">
                
                {
                    BanerTwo.map((elem)=>{
                       return(
                        <img className="w-[49%] rounded-xl" src={elem.image} alt=""/>
                       )
                        
                    })
                }
                
            </div>
        </div>
    
    </> );
}
 
export default Banertwo;