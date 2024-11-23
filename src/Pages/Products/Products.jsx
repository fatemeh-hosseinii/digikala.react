import { Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <Outlet /> 
        </div>
    );
};

export default Products;
