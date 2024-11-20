const Totalprice = () => {
    return (  <>
        <div className="flex flex-col bg-purple-700 w-[90%] rounded-md ">
           <div className="p-3">
                <div className="flex flex-row justify-between bg-[yellow]">
                    <p className="text-[#808389] text-[13px]">قیمت کالاها (۳)</p>
                    <p className="text-[#808389] text-[15px]">۱۷,۸۲۹,۰۰۰تومان</p>
                </div>
                <div className="flex flex-row justify-between bg-[yellow] mt-5">
                    <p className="text-[#3D3F63] text-[13px]">جمع سبد خرید</p>
                    <p className="text-[#3D3F63] text-[15px]">۴,۲۲۴,۰۰۰تومان</p>
                </div>
                <div className="flex flex-row justify-between bg-[yellow] mt-5">
                    <p className="text-[red] text-[13px]">سود شما از خرید</p>
                    <p className="text-[#3D3F63] text-[15px]">(۷۷٪)۱۳,۶۰۵,۰۰۰تومان</p>
                </div>
                <div className="bg-[pink] flex flex-row justify-center mt-5 p-2">
                    <button className="bg-[red]  w-[85%] rounded-md py-3 px-3"> 
                        <p className="text-[white] text-[15px]">تایید و تکمیل سفارش</p>
                    </button>
                </div>
           </div>
            <div className="bg-[#F0F0F1] mt-5 p-3">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        
                    </div>
                    
                </div>
            </div>          
        </div>   
    </>);
}
 
export default Totalprice;