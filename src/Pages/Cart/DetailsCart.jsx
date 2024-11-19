import SpecialSell from "../../Media/SpecialSell.png"
import {trashcan} from 'react-icons-kit/oct/trashcan'
import {u2795} from 'react-icons-kit/noto_emoji_regular/u2795'
import Icon from "react-icons-kit";
const DetailsCart = ({product}) => {
    return (
        <>
            <div className="bg-gray-800">
                <div className="bg-[yellow] mt-2 flex flex-row">
                        <div className="w-[20%] bg-slate-500 flex flex-col p-">
                            <div className="w-[70%]">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="mt-2 w-[60%] flex flex-row justify-center">
                                <img src={SpecialSell} alt="" />
                            </div>
                            <div className="bg-[white] w-[60%] flex flex-row justify-between p-2 mt-3 rounded-lg border-[gray] border-2">
                                <div>
                                    <Icon icon={trashcan} className="text-[red]" />
                                </div>
                                <div className="mt-1">
                                    <p className="text-[red] font-bold">
                                            ۱
                                    </p>
                                </div>
                                <div>
                                    <Icon icon={u2795} size={20} className="text-[red]"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bg-[red] flex flex-col">
                            <p className="text-[14px] font-bold">اسپیکر بلوتوثی قابل حمل ایکس-انرژی مدل Climber
                            </p>
                        </div>
                </div>

            </div>
        </>
      );
}
 
export default DetailsCart;