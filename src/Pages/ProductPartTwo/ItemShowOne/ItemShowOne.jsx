import PartRightItemShowOne from "./PartRightItemShowOne";
import PartLeftItemShowOne from "./PartLeftItemShowOne";

const ItemShowOne = ({ product }) => {
    return (
        <>
            <div className="w-[100%] flex flex-row mt-3">
                <div className="w-[35%] flex flex-col  bg-black">
                    <PartRightItemShowOne productshowone={product} />
                </div>
                <div className="w-[60%] flex flex-row bg-blue-800 gap-5">
                    <PartLeftItemShowOne productshowone={product} />
                </div>
           </div>
           
        </>
    );
};

export default ItemShowOne;
