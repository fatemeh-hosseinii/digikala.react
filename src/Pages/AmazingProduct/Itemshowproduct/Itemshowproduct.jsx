

import PartRightItemShow from "./PartRightItemShow";
import PartLeftItemShow from "./PartLeftItemShow";
const Itemshowproduct = ({productshow}) => {
    return (<>
        <div className="w-[35%]  flex flex-col ">
           <PartRightItemShow productshow={productshow}/>
        </div>
        <div className="w-[60%] flex flex-row  gap-5 ">
            <PartLeftItemShow productshow={productshow}/>
           
        </div>
    </>  );
}
 
export default Itemshowproduct;