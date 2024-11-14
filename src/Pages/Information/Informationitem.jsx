const Informationitem = ({information}) => {
    return ( <>
    
        <div className="flex flex-col justify-around items-center w-[100%] p-1">
            <a href="" className=" lg:w-[55%] w-[90%]">
            <img src={information.image} className="" alt="" />
            </a>
           
            <div className="">
                <p className="text-center lg:text-[12px] text-[10px] mt-2">{information.title}</p>
            </div>
           
        </div>
    </> );
}
 
export default Informationitem;