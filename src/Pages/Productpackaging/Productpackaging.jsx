
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_eight } from "../../Redux/ProductpackagSlice";

const Productpakaging = () => {
    const{productpackage,error,loading}=useSelector(state=>state.Productpackag)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_eight())
    },[])
    return (  <>
    <div className=" p-3">
        <div className=" flex flex-col justify-center items-center">
            <h2 className="text-center text-[19px]">خرید بر اساس دسته‌بندی</h2>
            <div className=" mt-5 gap-14 w-[90%] p-5 flex flex-row flex-wrap justify-around">
                {
                    productpackage?.map((elem)=>{
                        return(
                            <div className="flex flex-col w-[8%] items-center ">
                                <img src={elem.image} />
                   
                                <p className="text-[12px] text-center rounded-full">{elem.title}</p>
                    
                             </div>
                        )
                    })
                }
                
                
            </div>
        </div>
        
    </div>
    </>);
}
 
export default Productpakaging;