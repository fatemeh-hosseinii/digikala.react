import Icon from "react-icons-kit";
import { shoppingBasket } from "react-icons-kit/fa/shoppingBasket";
import { percent } from "react-icons-kit/fa/percent";
import {ic_chrome_reader_mode_twotone} from 'react-icons-kit/md/ic_chrome_reader_mode_twotone'
import { ic_local_fire_department } from "react-icons-kit/md/ic_local_fire_department";
import {tags} from 'react-icons-kit/ikons/tags'

const Navbaritem = ({ Navbaritem }) => {
    const iconMapping = {
        amazing:<Icon className="text-[#71747B]" icon={percent} size={"16px"} />,
        shop: <Icon className="text-[#71747B]" icon={shoppingBasket} size={"18px"} />,
        giftcart: <Icon className="text-[#71747B]" icon={ic_chrome_reader_mode_twotone} size={"20px"} />,
        buy:<Icon className="text-[#71747B]" icon={ ic_local_fire_department} size={"20px"} />,
        discount:<Icon className="text-[#71747B]" icon={tags} size={"20px"} />

    };

    
    const SelectedIcon = Navbaritem.icon ? iconMapping[Navbaritem.icon] : null;

    return ( 
        <>
           
            <li className=" items-center gap-1 flex flex-row justify-around "> 
            
            {SelectedIcon && <span className=" w-8 flex justify-center">{SelectedIcon}</span>}
            <span className="text-[13px] text-[#71747B]">{Navbaritem.name}</span> 
        </li>
        </>
    
    );
}

export default Navbaritem;
