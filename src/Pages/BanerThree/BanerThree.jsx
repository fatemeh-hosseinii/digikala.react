import banerthree from "../../Media/banerthree.png"
import banerres from "../../Media/resb.png"
const BanerThree = () => {
    return ( <>
    <div className="banerThree">
        <div className="md:flex hidden p-3 w-[100%]">
            <img src={banerthree} className="rounded-lg" alt=""/>


            
        </div>
        <div className=" container md:hidden flex p-1 ">

            <img src={banerres} alt="" className="rounded-xl"  />
        </div>
    </div>
      
    </> );
}
 
export default BanerThree;