const BestBrandItem = ({ BestBrand }) => {
    return (
        <div className=" border-l-2 p-2 h-[20vh] flex flex-row justify-center items-center">
        <img src={BestBrand.image} alt="" />
       </div>

    );
};

export default BestBrandItem;
