import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost_Digiclub } from "../../Redux/DigiclubSlice";
import digiclub from "../../Media/digiclub.png"
import DigiclubItem from "./DigiclubItem";
const Digiclub = () => {
  const dispatch = useDispatch();
  const { Digiclub, loading, error } = useSelector((state) => state.Digiclub);

  useEffect(() => {
    dispatch(fetchpost_Digiclub());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" p-3">
        <div className="bg-[#007295] flex lg:flex-row flex-col justify-between rounded-lg p-3">
            <div className="w-[10%] mt-4 ">
                <img src={digiclub} className="w-[95%] mt-2" />
                
            </div>
            <div className=" lg:w-[70%] md:w-[100%] sm:w-[70%] w-[100%] flex flex-row gap-2 mt-2">
                {
                    Digiclub?.map((elem)=>{
                        return(<DigiclubItem key={elem.id} digiclub={elem}/>)
                    })
                }
            </div>
        </div>
    
    </div>
  );
};

export default Digiclub;
