import { useLoaderData } from "react-router-dom";
// import Gellary from "../gellary/Gellary";
import Banner from "../banner/Banner";
import Products from "../../products/Products";
import Gellary from "../gellary/Gellary";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Service from "../service/Service";
import ShopByBrands from "../shop-by-brands/ShopByBrands";
// import Review from "../review/Review";



const Home = () => {
    const loadedProducts = useLoaderData();
    const {user} = useContext(AuthContext)
    console.log(user);
    
    
    return (
        <div className="">
            <Banner/>
            <Gellary/>
            <Products loadedProducts={loadedProducts}/>
            <Service/>
            <ShopByBrands/>
            {/* <Review/> */}
        </div>
    );
};

export default Home;