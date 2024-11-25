import {ic_adjust_twotone} from 'react-icons-kit/md/ic_adjust_twotone'
import {pin} from 'react-icons-kit/ionicons/pin'
import {video} from 'react-icons-kit/typicons/video'
import Icon from 'react-icons-kit';

const DigiclubItem = ({digiclub}) => {
     const iconMapping = {
        ic_adjust_twotone:<Icon className="text-[#0C3691]" icon={ic_adjust_twotone} size={"16px"} />,
        pin: <Icon className="text-[#0C3691]" icon={pin} size={25} />,
        video: <Icon className="text-[#0C3691]" icon={video} size={"20px"} />,
    };
     const SelectedIcon = digiclub.icon ? iconMapping[digiclub.icon] : null;
    return ( <>
     
     <div className=" flex flex-row w-[32%] justify-between p-1  bg-[white] rounded-lg"> 
        <div className=' lg:w-[40%] w-[55%] bg-[red]'>
            <div className='flex flex-row mt-4 gap-2 bg-[black]'>
                    {SelectedIcon && <span className=" lg:w-8 w-[15px] bg-[blue] flex justify-center ">{SelectedIcon}</span>}
                    <p className="lg:text-[12px] text-[8px] text-[#0C3691] mt-1">{digiclub.title}</p> 
            </div>
        </div>
            
           
            <img className='lg:w-[48%] w-[50%] ' src={digiclub.image} alt="" />
    </div>
    </> );
}
 
export default DigiclubItem;