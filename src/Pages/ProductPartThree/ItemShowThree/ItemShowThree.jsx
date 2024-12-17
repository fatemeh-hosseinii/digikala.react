import PartLeftItemShowThree from "./PartLeftItemShowThree";
import PartRightItemShowThree from "./PartRightItemShowThree";

const ItemShowThree = ({product}) => {
    return ( <>
           <div className="w-[100%] flex lg:flex-row flex-col mt-3 ">
                <div className="lg:w-[35%] w-[100%] flex flex-col  ">
                    <PartRightItemShowThree productshowthree={product} />
                </div>
                <div className="lg:w-[60%] w-[100%] flex lg:flex-row flex-col gap-5">
                    <PartLeftItemShowThree productshowthree={product} />
                </div>
           </div>
           
    </> );
}
 
export default ItemShowThree;