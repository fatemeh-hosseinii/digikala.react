import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchpost_twelve } from '../../Redux/ProductTwoSlice';
import ProductTwoitme from './ProductTwoItem';

const ProductTwo = () => {
    const { ProductTwo, loading, error } = useSelector(state => state.ProductTwo);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchpost_twelve());
    }, [dispatch]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-3 bg-slate-950 flex flex-row">
            <div className='bg-rose-900 flex flex-row rounded-lg border-[#E0E0E2] border-2'>
                {ProductTwo && ProductTwo.map((product) => (
                    <ProductTwoitme key={product.id} product={product}/>
                ))}
            </div>
           
        </div>
    );
};

export default ProductTwo;







