import { FaGifts } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { HiGiftTop } from "react-icons/hi2";
const Service = () => {
    return (
        <div className="my-14"> 
         <div className="flex items-center flex-col mb-10">
            <span className="w-72 block h-1 bg-blue-500"></span>
             <h2 className="text-4xl font-prata font-[600] text-blue-500 my-3">Our Services</h2>
            <span className="w-72 block h-1 bg-blue-500"></span>
         </div>
        <div className=" md:flex items-center justify-between">
            <div className="flex flex-col items-center p-2  px-3  md:border-r-2">
                <FaShippingFast className="text-3xl text-red-500"/>
                <h2 className="text-lg font-bold">Free Shipping</h2>
                <p className="text-gray-600">With our FREE shipping offer, you can conveniently browse and order your favorite toys from the comfort of your own home. We will ensure your purchase is carefully packaged and delivered right to your doorstep, saving you time and effort.</p>
            </div>

            <div className="flex flex-col items-center p-2  ml-2   md:border-r-2">
                <FaGifts className="text-3xl text-red-500"/>
                <h2 className="text-lg font-bold">Gift Cards</h2>
                <p className="text-gray-600">Struggling to find the perfect gift for a child in your life? Look no further than our Toy Store gift cards! With our gift cards, you can give the gift of endless possibilities, allowing the recipient to choose their own toy and create unforgettable memories.</p>
            </div>
            
            <div className="flex flex-col items-center p-2  px-3 ">
                <HiGiftTop className="text-3xl text-red-500"/>
                <h2 className="text-lg font-bold">Various Offers</h2>
                <p className="text-gray-600">With our FREE shipping offer, you can conveniently browse and order your favorite toys from the comfort of your own home. We will ensure your purchase is carefully packaged and delivered right to your doorstep, saving you time and effort.</p>
            </div>
        </div>
        </div>
    );
};

export default Service;