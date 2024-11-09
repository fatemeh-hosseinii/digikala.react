const Moreinfoitem = ({moreinfo}) => {
    return (  <>

      
        <div className="flex flex-col justify-around items-center w-[10%] p-1">
            <a href="" className="w-[100%]">
            <img src={moreinfo.image} className="" alt="" />
            </a>
           
            <div className="">
                <p className="text-center text-[11px] mt-2">{moreinfo.title}</p>
            </div>
           
        </div>
        
    </>);
}
 
export default Moreinfoitem;