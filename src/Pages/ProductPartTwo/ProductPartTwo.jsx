import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchpost_twelve } from '../../Redux/ProductTwoSlice';
import ProductTwoitme from './ProductTwoItem';

const ProductPartTwo = () => {
    const { ProductTwo, loading, error } = useSelector(state => state.ProductTwo);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchpost_twelve());
    }, [dispatch]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-3 flex flex-row">
            <div className=' flex flex-row rounded-lg border-[#E0E0E2] border-2'>
                {ProductTwo && ProductTwo.map((product) => (
                    <ProductTwoitme key={product.id} product={product}/>
                ))}
            </div>
           
        </div>
    );
};

export default ProductPartTwo;







