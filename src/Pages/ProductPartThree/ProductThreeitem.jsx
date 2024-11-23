import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { Link } from 'react-router-dom';

const ProductThreeitem = ({ product }) => {
    return (
        <>
            <div className="lg:w-[25%] w-[100%] mx-auto p-2 lg:border-l-2 border-[#E0E0E2]">
                <div className="flex flex-col mb-4">
                    <p>{product.title}</p>
                    <p className="text-[11px] text-[#c7c8cb]">بر اساس سلیقه شما</p>
                </div>

                <div className="grid grid-cols-2 gap-[1px] bg-gray-300">
                    {product.watch?.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-3 flex-shrink-0 relative"
                        >
                            <Link to={`/products/productthree/${item.id}`} className="block">
                                <img
                                    src={item.image}
                                    className="w-full"
                                    alt={`Product ${item.id}`}
                                />
                            </Link>
                        </div>
                    ))}

                    {product.socks?.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-3 flex-shrink-0 relative"
                        >
                            <Link to={`/products/productthree/${item.id}`} className="block">
                                <img
                                    src={item.image}
                                    className="w-full"
                                    alt={`Cover ${item.id}`}
                                />
                            </Link>
                        </div>
                    ))}

                    {product.caraccessories?.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-3 flex-shrink-0 relative"
                        >
                            <Link to={`/products/productthree/${item.id}`} className="block">
                                <img
                                    src={item.image}
                                    className="w-full"
                                    alt={`Headphone ${item.id}`}
                                />
                            </Link>
                        </div>
                    ))}

                    {product.watch_kind_two?.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-3 flex-shrink-0 relative"
                        >
                            <Link to={`/products/productthree/${item.id}`} className="block">
                                <img
                                    src={item.image}
                                    className="w-full"
                                    alt={`Laptop ${item.id}`}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* لینک مشاهده */}
                <Link to={`/products/productstwo/${product.id}`} className="flex flex-row justify-center">
                    <p className="text-[14px] text-[#45C1D3] mt-1">مشاهده</p>
                    <Icon className="text-[#45C1D3]" icon={ic_keyboard_arrow_left} />
                </Link>
            </div>
        </>
    );
};

export default ProductThreeitem;
