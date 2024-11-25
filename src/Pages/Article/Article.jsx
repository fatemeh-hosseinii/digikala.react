import { useEffect } from 'react';
import Icon from 'react-icons-kit';
import {ic_keyboard_arrow_left_outline} from 'react-icons-kit/md/ic_keyboard_arrow_left_outline'
import { useDispatch, useSelector } from 'react-redux';
import { fetchpost_Article } from '../../Redux/ArticleSlice';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Article = () => {
    const {Article}=useSelector(state=>state.Article)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchpost_Article())
    },[])
    return (<>
    <div className="p-2 bg-slate-950">
        <div className=" flex flex-col bg-slate-600  mt-2">
            <div className=" flex flex-row justify-between">
                <p className="text-[16px] font-bold">خواندنی‌ها</p>
                <div className="flex flex-row">
                    <p className="text-[12px] text-[#20C4DA] mt-2">مطالب بیشتر در دیجی‌کالا مگ</p>
                    <Icon className='text-[#20CADA]' icon={ic_keyboard_arrow_left_outline}/>
                </div>
                
            </div>
            <div className=" mt-4 w-[100%] flex lg:flex-row flex-col justify-around gap-2 p-1 bg-slate-950">
               
                {
                    Article.map((elem)=>{
                        return(
                        <div className='flex flex-col bg-gray-900  lg:w-[30%] w-[100%] mx-auto  border-[1px]  border-[#A3A1A2] rounded-lg'>
                           <img src={elem.image} className='w-[100%] ' alt="" />
                           <div className='p-3'>
                            <p className='text-[12px] mt-2'>{elem.title}</p>
                           </div>
                         
                            
                        </div>
                        )
                    })
                }
            </div>

        </div>
        
    </div>
    </>  );
}
 
export default Article;