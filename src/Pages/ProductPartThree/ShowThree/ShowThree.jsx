
import { homeOutline } from 'react-icons-kit/typicons/homeOutline';
import { bell } from 'react-icons-kit/entypo/bell';
import Icon from "react-icons-kit";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchpost_single_product_parttwo } from '../../../Redux/SingleProductPartTwoSlice';
import ItemShowThree from '../ItemShowThree/ItemShowThree';
import { useEffect } from 'react';

const ShowThree = () => {
    const { id } = useParams();
    const { SingleProductPartTwo, loading, error } = useSelector(state => state.SingleProductPartTwo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost_single_product_parttwo(id));
    }, [dispatch, id]);

    if (loading) return <div>در حال بارگذاری...</div>;
    if (error) return <div>خطا در بارگذاری محصول: {error.message}</div>;

    const product = SingleProductPartTwo?.find((elem) => elem.id === id);
    

    if (!product) return <div>محصول یافت نشد</div>;

    return (
        <div className="mt-3 w-full p-3">
            <div className="w-full flex justify-between">
                <div className="flex w-7/10 gap-3 text-gray-400 text-sm">
                    <a>دیجیتال</a>/<a>کالای دیجیتال</a>/<a>ساعت هوشمند</a>
                </div>
                <div className="w-1/4 lg:flex hidden gap-8">
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
            <ItemShowThree product={product} />
        </div>
    );
};

export default ShowThree;
