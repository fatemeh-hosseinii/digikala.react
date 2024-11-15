import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
const ProductTwoitme = ({product}) => {
    return ( <>
    <div  className="w-[25%] mx-auto p-2 border-l-2 border-[#E0E0E2]">
        <div className="flex flex-col mb-4">
            <p>{product.title} </p>
            <p className="text-[11px] text-[#c7c8cb]">بر اساس سلیقه شما</p>
        </div>

        <div className="flex flex-wrap bg-gray-600 items-center justify-center p-1 mx-auto gap-3 w-full">
            {product.mobail && product.mobail.map((item) => (
                 <img key={item.id} src={item.image} className="w-[40%] flex-shrink-0" alt={`Product ${item.id}`} />
            ))}
                        
            {product.cover && product.cover.map((item) => (
                <img key={item.id} src={item.image} className="w-[40%] flex-shrink-0" alt={`Cover ${item.id}`} />
             ))}

                        
            {product.hedphone && product.hedphone.map((item) => (
                <img key={item.id} src={item.image} className="w-[40%] bg-rose-600 flex-shrink-0" alt={`Headphone ${item.id}`} />
            ))}
            {product.labtop && product.labtop.map((item) => (
                <img key={item.id} src={item.image} className="w-[40%] bg-rose-600 flex-shrink-0" alt={`Headphone ${item.id}`} />
            ))}
        </div>

        <a href="#" className="flex flex-row justify-center">
            <p className="text-[14px] text-[#45C1D3] mt-1">مشاهده</p>
            <Icon className="text-[#45C1D3]" icon={ic_keyboard_arrow_left} />
        </a>
    </div>
    </> );
}
 
export default ProductTwoitme;




{/* <div className=" w-[25%] mx-auto p-2 border-l-2 border-[#E0E0E2]">
    <div className='flex flex-col'>
        <p>گوشی موبایل</p>
        <p className='text-[11px] text-[#c7c8cb]'>بر اساس سلیقه شما</p>
        
    </div>
    <div className="flex flex-wrap items-center justify-center  p-1 mx-auto gap-0 w-full">
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[#E0E0E2] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[80%] h-[2px] bg-[#E0E0E2] my-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[#E0E0E2] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
    </div>
    <a href="#" className=' flex flex-row justify-center'>
        <p className='text-[14px] text-[#45C1D3] mt-1'>مشاهده</p>
        <Icon className='text-[#45C1D3]' icon={ic_keyboard_arrow_left}/>

    </a>
</div>

<div className="bg-slate-500 w-[25%] border-l-2 border-[red]">
    <div className='flex flex-col'>
        <p>کیف و کاور گوشی </p>
        <p className='text-[11px] text-[#c7c8cb]'>بر اساس سلیقه شما</p>
    </div>
    <div className="flex flex-wrap items-center justify-center bg-blue-600 p-1 mx-auto gap-0 w-full">
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[red] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[80%] h-[2px] bg-[red] my-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[red] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
    </div>
    <a href="#" className='bg-slate-900 flex flex-row justify-center'>
        <p className='text-[14px] text-[#45C1D3] mt-1'>مشاهده</p>
        <Icon className='text-[#45C1D3]' icon={ic_keyboard_arrow_left}/>

    </a>
    
</div>
<div className="bg-slate-500 w-[25%] border-l-2 border-[red]">
<div className='flex flex-col'>
        <p>کیف و کاور گوشی </p>
        <p className='text-[11px] text-[#c7c8cb]'>بر اساس سلیقه شما</p>
    </div>
    <div className="flex flex-wrap items-center justify-center bg-blue-600 p-1 mx-auto gap-0 w-full">
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[red] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[80%] h-[2px] bg-[red] my-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[red] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
    </div>
    <a href="#" className='bg-slate-900 flex flex-row justify-center'>
        <p className='text-[14px] text-[#45C1D3] mt-1'>مشاهده</p>
        <Icon className='text-[#45C1D3]' icon={ic_keyboard_arrow_left}/>

    </a>
    
</div>
<div className="bg-slate-500 w-[25%] border-l-2 border-[red]">
<div className='flex flex-col'>
        <p>کیف و کاور گوشی </p>
        <p className='text-[11px] text-[#c7c8cb]'>بر اساس سلیقه شما</p>
    </div>
    <div className="flex flex-wrap items-center justify-center bg-blue-600 p-1 mx-auto gap-0 w-full">
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[red] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[80%] h-[2px] bg-[red] my-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
        <div className="w-[2px] h-[20vh] bg-[red] mx-1"></div> 
        <img src={slm} className="w-[40%] flex-shrink-0" alt="" />
    </div>
    <a href="#" className='bg-slate-900 flex flex-row justify-center'>
        <p className='text-[14px] text-[#45C1D3] mt-1'>مشاهده</p>
        <Icon className='text-[#45C1D3]' icon={ic_keyboard_arrow_left}/>

    </a>
    
</div> */}