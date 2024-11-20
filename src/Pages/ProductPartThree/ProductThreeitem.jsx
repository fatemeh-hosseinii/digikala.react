import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { Link } from 'react-router-dom';
const ProductThreeitem = ({product}) => {
    return ( <>
        <div className="lg:w-[25%] w-[100%] mx-auto p-2 lg:border-l-2 border-[#E0E0E2]">
            <div className="flex flex-col mb-4">
                <p>{product.title}</p>
                <p className="text-[11px] text-[#c7c8cb]">بر اساس سلیقه شما</p>
            </div>

            <div className="flex lg:flex-wrap flex-wrap  items-center justify-center p-1 mx-auto  w-full">
                {product.watch && product.watch.map((item, index) => (
                  <div
                  key={item.id}
                  className={`w-[48%] p-3  flex-shrink-0 relative ${
                    index % 2 === 0 ? 'border-l-[1px] border-gray-300' : ''
                  } ${
                    index < product.watch.length - 2
                      ? 'border-b-[1px] border-gray-300'
                      : ''
                  }`}
                >
                    
                    <Link key={item.id} to={`/productthree/${item.id}`} className="w-[48%] flex-shrink-0">
                        <img
                            src={item.image}
                            className="w-full"
                            alt={`Product ${item.id}`}
                        />
                    </Link>
                </div>

                ))}
                
                {product.socks && product.socks.map((item, index) => (
                    <div
                        key={item.id}
                        className={`w-[48%] p-3  flex-shrink-0 relative ${
                        index % 2 === 0 ? 'border-l-[1px] border-gray-300' : ''
                        } ${
                        index < product.socks.length - 2
                            ? 'border-b-[1px] border-gray-300'
                            : ''
                        }`}
                       >
                        <Link key={item.id} to={`/productthree/${item.id}`} className="w-[48%] flex-shrink-0">
                            <img
                                src={item.image}
                                className="w-full"
                                alt={`Cover ${item.id}`}
                            />
                        </Link>
                   </div> 
                ))}

                {product.caraccessories && product.caraccessories.map((item, index) => (
                    <div
                    key={item.id}
                    className={`w-[48%] p-3  flex-shrink-0 relative ${
                    index % 2 === 0 ? 'border-l-[1px] border-gray-300' : ''
                    } ${
                    index < product.caraccessories.length - 2
                        ? 'border-b-[1px] border-gray-300'
                        : ''
                    }`}
                   >
                    <Link key={item.id} to={`/productthree/${item.id}`} className="w-[48%] flex-shrink-0">
                        <img
                            src={item.image}
                            className="w-full"
                            alt={`Headphone ${item.id}`}
                        />
                    </Link>
                   </div> 
                ))}
                
                {product.watch_kind_two && product.watch_kind_two.map((item, index) => (
                    <div
                      key={item.id}
                      className={`w-[48%] p-3  flex-shrink-0 relative ${
                      index % 2 === 0 ? 'border-l-[1px] border-gray-300' : ''
                      } ${
                      index < product.watch_kind_two.length - 2
                          ? 'border-b-[1px] border-gray-300'
                          : ''
                      }`}
                     >
                        <Link key={item.id} to={`/productthree/${item.id}`} className="w-[48%] flex-shrink-0">
                            <img
                                src={item.image}
                                className="w-full"
                                alt={`Laptop ${item.id}`}
                            />
                        </Link>
                    </div>
                ))}
            </div>
            
            <Link to={`/productstwo/${product.id}`} className="flex flex-row justify-center">
                <p className="text-[14px] text-[#45C1D3] mt-1">مشاهده</p>
                <Icon className="text-[#45C1D3]" icon={ic_keyboard_arrow_left} />
            </Link>
        </div>    
    </> );
}
 
export default ProductThreeitem;