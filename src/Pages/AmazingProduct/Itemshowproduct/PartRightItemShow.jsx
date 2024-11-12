
import Icon from "react-icons-kit";
import incrdible from  "../../../Media/IncredibleOffer.png"
import {ic_update} from 'react-icons-kit/md/ic_update'
import {ic_favorite_border_outline} from 'react-icons-kit/md/ic_favorite_border_outline'
import {ic_trending_down} from 'react-icons-kit/md/ic_trending_down'
import {listUl} from 'react-icons-kit/fa/listUl'
import {iosBookmarks} from 'react-icons-kit/ionicons/iosBookmarks'
import { bell } from 'react-icons-kit/entypo/bell';
import {ic_settings_input_antenna_outline} from 'react-icons-kit/md/ic_settings_input_antenna_outline'

const PartRightItemShow = ({productshow}) => {
    return ( 
        <>
        
            <div className="flex flex-row justify-between bg-[#FDECF0] p-3">
                    <img src={incrdible} className="" alt="" />
                    <div className=" flex flex-row justify-center gap-2">
                        <p className="text-[12px] text-[#EB4264] mt-1">۴۵ : ۴۹ : ۱۰</p>
                        <Icon icon={ic_update} className="text-[#EB4264]"/>

                    </div>
                   
            </div>
            <div className=" flex flex-row p-2">
                <div className=" flex flex-col p-2 gap-5">
                    <Icon icon={ic_favorite_border_outline} className="text-[#424750]" size={23} />
                  
                    <Icon icon={ic_settings_input_antenna_outline}  className="text-[#424750]" size={23} />

                    <Icon icon={ic_trending_down}  className="text-[#424750]" size={23} />
                    <Icon icon={listUl} className="text-[#424750]" size={23} />
                    <Icon icon={iosBookmarks}  className="text-[#424750]" size={23} />
                    <Icon icon={bell}  className="text-[#424750]" size={23} />



                    
                </div>
                <img src={productshow.image} className="w-[100%] mt-5" alt="" />
                        
            </div>
        
        </>
     );
}
 
export default PartRightItemShow;