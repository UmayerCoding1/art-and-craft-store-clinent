import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const Root = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> 
             <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;