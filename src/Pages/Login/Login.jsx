import Icon from 'react-icons-kit';

import {login} from 'react-icons-kit/iconic/login'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
        <div className="flex flex-row justify-center gap-4 w-[40%] ">
            <div className="w-[58%] ">
                <button className="bg-white border-2 p-1 border-solid border-[#f0f0f0] w-[100%]   rounded-md flex justify-around items-center ">
                    <div className="bg-white flex mt-1 gap-2">
                        <Icon icon={login} className="text-[#515151]" size={"20px"}/>
                        <span className="text-[12px] font-bold text-[#424242] mt-1">ورود</span>
                    </div>  
                                                    
                    <div className="w-[1%] h-[17px] bg-[#484848]"></div>
                    <div className="w-[43%]">
                         <span className="text-[12px] font-bold text-[#515151] text-bold mt-2">ثبت نام</span>
                    </div>
                </button>
            </div>

            <div className=" flex flex-row justify-around items-center">
                <span className="h-[20px] w-[2px] bg-[#c7c8cb]"></span>
            </div>

            <Link to='/Cart' className='mt-2'>
                <Icon icon={shoppingCart} size={"26px"} className='text-[#424242]' />
            </Link>
                   
        </div>
     );
}
 
export default Login;