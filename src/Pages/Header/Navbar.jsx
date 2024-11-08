import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost } from "../../Redux/NavbarSlice"; 
import Navbaritem from "./Navbaritem";
import {alignJustify} from 'react-icons-kit/fa/alignJustify'
import {location} from 'react-icons-kit/oct/location'
import Icon from "react-icons-kit";

const Navbar = () => {
    const { Navbar, loading, error } = useSelector((state) => state.Navbar);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return ( 
        <>
        <ul className="flex flex-row justify-around  w-[75%]">
            <li className="items-center gap-3 flex flex-row justify-around ">
                <Icon icon={alignJustify} className="text-[#71747B]" size={18} />
                <span  className="text-[15px] text-[#5a5b5c]"> دسته بندی کالاها</span>

            </li>
            <div className=" flex flex-row justify-around items-center">
                <span className="h-[20px] w-[2px] bg-[#c7c8cb]"></span>
            </div>
           {Navbar?.map((elem) => (
               <Navbaritem key={elem.id} Navbaritem={elem} /> 
           ))}

            <div className=" flex flex-row justify-around items-center">
                <span className="h-[20px] w-[2px] bg-[#c7c8cb]"></span>
            </div>
            <li className="items-center gap-3 flex flex-row justify-around  ">
               
               <span  className="text-[12px] text-[#71747B]">     سوالی دارید ؟</span>
               

           </li>
            <li className="items-center gap-3 flex flex-row justify-around  ">
               
                <span  className="text-[12px] text-[#71747B]">    در دیجی کالا بفروشید !</span>
          

            </li>

        </ul>
        

        <div className=" w-[30%] flex flex-row justify-end p-2">
            <div className="flex flex-row justify-around items-center gap-2 ">
                <div>
                    <Icon className="text-[#71747B]" size={"20px"} icon={location}/>
                </div>
               
                <p className="text-[12px] text-[#71747B]">    لطفا شهر خود را انتخاب کنید </p>
            </div>
            
        </div>
        </>
 
        

    );
}

export default Navbar;
