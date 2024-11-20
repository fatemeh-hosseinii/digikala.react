import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchpost_ProductThree } from '../../Redux/ProductThreeSlice';
import ProductThreeitem from './ProductThreeitem';

const ProductPartThree = () => {
    const { ProductThree, loading, error } = useSelector(state => state.ProductThree);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchpost_ProductThree());
    }, [dispatch]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="p-3  flex flex-row">
            <div className=' flex lg:flex-row flex-col rounded-lg border-[#E0E0E2] border-2'>
                {ProductThree && ProductThree.map((product) => (
                    <ProductThreeitem product={product} key={product.id}/>
                ))}
            </div>
           
        </div>
    );
};

export default ProductPartThree;