import PartRightItemShowOne from "./PartRightItemShowOne";
import PartLeftItemShowOne from "./PartLeftItemShowOne";

const ItemShowOne = ({ product }) => {
    return (
        <>
            <div className="w-[100%] flex lg:flex-row flex-col mt-3">
                <div className="lg:w-[35%] w-[100%] flex flex-col">
                    <PartRightItemShowOne productshowone={product} />
                </div>
                <div className="lg:w-[60%] w-[100%] flex lg:flex-row flex-col gap-5">
                    <PartLeftItemShowOne productshowone={product} />
                </div>
           </div>
           
        </>
    );
};

export default ItemShowOne;
