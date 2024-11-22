const DiscountPItem = ({ product }) => {
    return (
        <div className="bg-white ">
            <img
                src={product.image}
                alt="Product"
                className="w-full h-auto rounded-md object-cover"
            />
            <div className="flex flex-col ">
                <div className="flex flex-row  justify-between ">
                    <div className="rounded-xl bg-[#ef4056] px-2 mt-1">
                        <p className="text-[12px] text-[white] text-center mt-1">{product.discount}</p>
                       
                    </div>

                    <p className="text-[14px]">{product.price_1}تومان</p>
                </div>
                <p className="line-through text-end text-[12px] text-[#E0E0E2]">{product.price_2}</p>
            </div>
        </div>
    );
};

export default DiscountPItem;
