
import slm from "../../Media/slm.png"
const Productpakaging = () => {
    return (  <>
    <div className="bg-rose-700 p-3">
        <div className="bg-pink-100 flex flex-col">
            <h2 className="text-center text-[19px]">خرید بر اساس دسته‌بندی</h2>
            <div className="bg-red-400 mt-5 gap-14 p-5 flex flex-row flex-wrap">
              
                <div className="flex flex-col w-[8%] items-center">
                    
                    <img src={slm} alt=""/>
                    <p>گوشی</p>
                    
                </div>
                
            </div>
        </div>
        
    </div>
    </>);
}
 
export default Productpakaging;