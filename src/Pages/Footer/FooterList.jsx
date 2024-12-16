import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_footer } from "../../Redux/FooterSlice";
import dglogo from "../../Media/dglogo.png";
import footerlogo2 from "../../Media/footerlogo2.png";
import bazar from "../../Media/coffe-bazzar.png";
import myket from "../../Media/myket.png";
import sib_app from "../../Media/sib-app.png";
import more from "../../Media/More.png";

const FooterList = () => {
  const { Footer, loading, error } = useSelector((state) => state.Footer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpost_footer());
  }, [dispatch]);

  return (
    <>
      {/* Main Footer Content */}
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

      {/* Follow Us Section */}
      <section className="flex flex-col p-4  rounded-lg  bg-red-600">
        <p className="text-[gray] text-lg ">همراه ما باشید!</p>
        <div className="flex gap-4 items-center">
          <img
            src={bazar}
            alt="Coffe Bazaar"
            className="w-12 h-12 object-contain"
          />
          <img src={myket} alt="Myket" className="w-12 h-12 object-contain" />
          <img
            src={sib_app}
            alt="Sib App"
            className="w-12 h-12 object-contain"
          />
          <img src={more} alt="More" className="w-12 h-12 object-contain" />
        </div>
      </section>
    </>
  );
};

export default FooterList;
