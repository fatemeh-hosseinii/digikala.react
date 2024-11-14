const BestBrandItem = ({ BestBrand }) => {
    return (
        <div className="bg-slate-500 border-l-2 p-2 h-[20vh]">
        <img src={BestBrand.image} alt="" />
       </div>

    );
};

export default BestBrandItem;
