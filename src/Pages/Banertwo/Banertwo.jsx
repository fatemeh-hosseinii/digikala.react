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

            <div className="flex lg:flex-row flex-col justify-around gap-3">
                
                {
                    BanerTwo.map((elem)=>{
                       return(
                        <img className="lg:w-[49%] w-[100%] rounded-xl" src={elem.image} alt=""/>
                       )
                        
                    })
                }
                
            </div>
        </div>
    
    </> );
}
 
export default Banertwo;