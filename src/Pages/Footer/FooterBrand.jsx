import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchpost_footer } from "../../Redux/FooterSlice"

const FooterBrand = () => {
    const{Footer,loading,erorr}=useSelector(state=>state.Footer)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_footer())
    },[])
    return ( <>
      <div className="text-center mt-5">
                    <p className="text-[12px] text-[#898F92]">برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
                    <div className="bg-[yellow] mt-5 w-[100%] flex  flex-wrap justify-start">
                        {
                            Footer?.map((item)=>{
                                return item.brand_footer?.map((elem)=>{
                                    return <>
                                        <div className="border-l-[1px] border-b-[1px] border-gray-300 p-5 w-[12.5%] bg-[#F0F0F1] flex-row  justify-center">
                                            <img className="w-[100%] h-[20px]" src={elem.image} />
                            
                                        </div>
                                    </>
                                })
                            })
                        }
                      
                    </div> 
        </div>
    </> );
}
 
export default FooterBrand;