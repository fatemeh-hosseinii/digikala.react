const Informationitem = ({information}) => {
    return ( <>
    
        <div className="flex flex-col justify-around items-center w-[100%] p-1">
            <a href="" className="w-[55%]">
            <img src={information.image} className="" alt="" />
            </a>
           
            <div className="">
                <p className="text-center text-[12px] mt-2">{information.title}</p>
            </div>
           
        </div>
    </> );
}
 
export default Informationitem;