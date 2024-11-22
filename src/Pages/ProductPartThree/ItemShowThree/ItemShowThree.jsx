import PartLeftItemShowThree from "./PartLeftItemShowThree";
import PartRightItemShowThree from "./PartRightItemShowThree";

const ItemShowThree = ({product}) => {
    return ( <>
           <div className="w-[100%] flex lg:flex-row flex-col mt-3 bg-slate-950">
                <div className="lg:w-[35%] w-[100%] flex flex-col  bg-black">
                    <PartRightItemShowThree productshowthree={product} />
                </div>
                <div className="lg:w-[60%] w-[100%] flex lg:flex-row flex-col bg-blue-800 gap-5">
                    <PartLeftItemShowThree productshowthree={product} />
                </div>
           </div>
           
    </> );
}
 
export default ItemShowThree;