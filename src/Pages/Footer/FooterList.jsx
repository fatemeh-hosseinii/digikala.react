import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_footer } from "../../Redux/FooterSlice";

import {youtube} from 'react-icons-kit/icomoon/youtube'
import {github} from 'react-icons-kit/icomoon/github'
import {steam2} from 'react-icons-kit/icomoon/steam2'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import Icon from "react-icons-kit";
const FooterList = () => {
  const { Footer, loading, error } = useSelector((state) => state.Footer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpost_footer());
  }, [dispatch]);

  return (
    <>
    
      <section className="w-[70%]  flex justify-between flex-row flex-wrap gap-4">
        {loading ? (
          <p className="text-center text-gray-500">در حال بارگذاری...</p>
        ) : error ? (
          <p className="text-center text-red-500">خطایی رخ داده است: {error}</p>
        ) : (
          Footer?.map((list) =>
            list?.lists?.map((elem) => (
              <div
                key={elem.id}
                className="flex flex-col p-4 "
              >
                <h2 className="text-[#585573] text-lg font-semibold mb-3">
                  {elem.title}
                </h2>
                <div className="flex flex-col gap-2">
                  {elem?.items?.map((item) => (
                    <p
                      key={item.id}
                      className="text-[#A6A8AD] text-sm hover:text-[gray] transition"
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
            ))
          )
        )}
      </section>

      <section className="flex flex-col p-5 w-[30%]   rounded-lg ">
        <p className="text-[#5b5b5b] text-lg ">همراه ما باشید!</p>
        <div className="flex flex-row gap-10 mt-3">
          <Icon className="text-[#A1A3A8]" icon={youtube} size={30} />
          <Icon className="text-[#A1A3A8]" icon={github} size={30} />
          <Icon className="text-[#A1A3A8]" icon={steam2} size={30} />
          <Icon className="text-[#A1A3A8]" icon={linkedin} size={30} />

          
        </div>
        <div className="flex flex-col mt-5">
          <p className="text-[#626262] text-[15px] font-semibold">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <input type="text" className="bg-[#F0F0F1] p-3 w-[80%]  rounded-md" placeholder="ایمیل شما" />
            <button className="bg-[#E0E0E2] w-[15%] p-1 rounded-md text-[white]">ثبت</button>

          </div>
          
        </div>
      </section>
    </>
  );
};

export default FooterList;
