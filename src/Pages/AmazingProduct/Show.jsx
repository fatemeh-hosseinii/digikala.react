import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct1 } from "../../Redux/Showproduct1Slice";
import { useParams } from "react-router-dom";
import { homeOutline } from 'react-icons-kit/typicons/homeOutline';
import { bell } from 'react-icons-kit/entypo/bell';
import Icon from "react-icons-kit";
import Itemshowproduct from "./Itemshowproduct/Itemshowproduct";


const Show = () => {
    const { id } = useParams();
    const { product, loading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct1(id));
    }, []);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    return (
        <div className=" mt-3 w-full p-3">
            <div className="w-full flex justify-between">
                <div className=" flex w-7/10 gap-3 text-gray-400 text-sm">
                    <a>دیجیتال</a>/<a>کالای دیجیتال</a>/<a>ساعت هوشمند</a>
                </div>
                <div className="w-1/4 flex gap-8">
                    <a href="#" className="text-gray-400 text-xs flex gap-2">
                        <p className="mt-1">فروش در دیجی کالا</p>
                        <Icon className="text-gray-400" icon={homeOutline} size={20} />
                    </a>
                    <a href="#" className="text-gray-400 text-xs flex gap-2">
                        <p className="mt-1">ثبت آگهی در پیندو</p>
                        <Icon className="text-gray-400" icon={bell} size={20} />
                    </a>
                </div>
            </div>

            <div className=" mt-5 w-full flex flex-row gap-5">
                {product?.map((elem) => (
                    <Itemshowproduct key={elem.id} productshow={elem} />
                ))}
            </div>
        </div>
    );
};

export default Show;
