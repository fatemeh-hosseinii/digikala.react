import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Informationitem from "./Informationitem";
import Moreinformation from "./Moreinformation";
import { fetchpost_tree } from "../../Redux/InformationSlice";

const Information = () => {
    const { information, loading, error } = useSelector((state) => state.information);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchpost_tree());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error occurred: {error}</p>;

    return (
        <div className="p-5 mt-5 flex flex-row justify-between">
            {information?.map((elem)=>{
                return <Informationitem key={elem.id} information={elem} />
            })}
            <div className="mr-[20px]">
                <Moreinformation/>  
            </div>
           
       </div>
    );
};

export default Information;

