
import fresh from  "../../Media/fresh.png" 
import freshincredible from  "../../Media/fresh-incredible-offer.png" 

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchpost_six } from "../../Redux/AmazingShopSlice"
import {ic_keyboard_backspace_outline} from 'react-icons-kit/md/ic_keyboard_backspace_outline'
import Icon from "react-icons-kit"
const Amazingshop = () => {
    const {AmazingShop,loading,erorr}=useSelector(state=>state.AmazingShop)
  
    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_six())
    },[])
    if (loading) return <p>Loading...</p>;
if (erorr) return <p>Error: {erorr}</p>;

    return ( <>
        <div className=" rounded-lg flex lg:flex-row flex-col p-3">
            <div className="p-4 bg-[#ECEFEE] w-[100%] flex lg:flex-row flex-col gap-10  rounded-3xl">
                <div className="w-[45%]  flex flex-row gap-5">
                    <div>
                    <img src={fresh} alt="" />
                        
                    </div>
                    <div className="mt-5">
                        <img src={freshincredible} alt="" />
                    </div>
                    <div className="mt-4">
                    <button className="btn bg-[green] px-4 py-1 rounded-3xl ">
                        <p className="inline-block  text-body1-strong text-white">تا ۴۲٪ تخفیف</p>
                    </button>
                    </div>
                  
                   
                </div>
                <div className=" w-[50%] flex flex-row" >
                  
                    <div className=" flex flex-row gap-5">
                    {AmazingShop?.map((elem)=>{
                        return(
                          
                            
                        <div className="w-[10%] p-3 bg-[white] rounded-full relative">
                            <img src={elem.image} alt=""/>
                            <a href="" className="bg-[#D32F2F] rounded-full absolute right-0 bottom-0 text-[12px] px-2 text-white">
                                {elem.discount}
                            </a>
                        </div> 
                        )
                    })}
                       
                        
                    <div className="">
                        <button className="bg-[white] mt-3 px-5 py-3 text-[12px] rounded-2xl flex flex-row gap-2">   
                            <p className="text-[#029C61]">بیش از ۸۰ کالا</p>
                            <Icon className="text-[#029C61]" icon={ic_keyboard_backspace_outline} size={16}/>
                        </button>
                        
                    </div>   
                    </div>
                    
                </div>
                
            </div>
        </div>
    </> );
}
 
export default Amazingshop;