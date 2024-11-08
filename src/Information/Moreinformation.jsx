import Icon from 'react-icons-kit';
import {ic_more_horiz} from 'react-icons-kit/md/ic_more_horiz'
const Moreinformation = () => {

    return ( <>
    <button  className="btn px-4 py-4 rounded-full bg-[#F0F0F1]">
        <Icon icon={ic_more_horiz} size={"28px"}  className='text-[#A1A3A8]'/>

    </button>
    <p className='text-center text-[12px] mt-2'>بیشتر</p>
    </> );
}
 
export default Moreinformation;