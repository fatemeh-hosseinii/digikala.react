import { useEffect } from 'react';
import Icon from 'react-icons-kit';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_foure, toggleMenu } from '../../Redux/MoreinformationSlice';
import { ic_close } from 'react-icons-kit/md/ic_close';
import Moreinfoitem from './Moreinfoitem';

const Moreinformation = () => {
  const { Moreinformation, isOpen, loading, error } = useSelector(state => state.moreinformation); // اصلاح نام state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_foure());
  }, [dispatch]);

  return (
    <>
      <button onClick={() => dispatch(toggleMenu())} className="btn px-4 py-4 rounded-full bg-[#F0F0F1]">
        <Icon icon={ic_more_horiz} size={"28px"} className='text-[#A1A3A8]' />
      </button>
      <p className='text-center text-[12px] mt-2'>بیشتر</p>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[#bbbbbb] opacity-35"></div>
          <div className="relative bg-white opacity-100 overflow-y-hidden rounded-lg z-[100] p-2 flex flex-col justify-between w-[50%]">
            <div className='flex flex-row justify-between'>
              <p className='font-bold'>خدمات دیجی‌کالا</p>
              <Icon icon={ic_close} className='text-[#A1A3A8]' size={"28px"} />
            </div>
            <hr className='mt-5' />
            <div className='flex flex-col justify-between items-center overflow-y-auto p-2'>
              <div className='flex flex-row justify-between flex-wrap gap-5 bg-slate-600 items-center p-2'>
                {Moreinformation?.map((elem) => (
                  <Moreinfoitem key={elem.id} moreinfo={elem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Moreinformation;