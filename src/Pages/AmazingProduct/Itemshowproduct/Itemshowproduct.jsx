

import PartRightItemShow from "./PartRightItemShow";
import PartLeftItemShow from "./PartLeftItemShow";
const Itemshowproduct = ({productshow}) => {
    return (<>
        <div className="xl:w-[35%] w-[100%] flex flex-col xl:p-0 p-2  ">
           <PartRightItemShow productshow={productshow}/>
        </div>
        <div className="xl:w-[60%] w-[100%]  flex xl:flex-row  flex-col xl:gap-5 ">
            <PartLeftItemShow productshow={productshow}/>
           
        </div>
    </>  );
}
 
export default Itemshowproduct;