import logo1 from './../../../assets/image/logo/logo1.png'
import logo2 from './../../../assets/image/logo/logo2.png'
import logo3 from './../../../assets/image/logo/logo3.png'
import logo4 from './../../../assets/image/logo/logo4.png'
import logo5 from './../../../assets/image/logo/logo5.png'
import logo6 from './../../../assets/image/logo/logo6.png'

const ShopByBrands = () => {
    return (
        <div className='mb-10'>
            <div className="flex items-center flex-col mb-10">
            <span className="w-80 block h-1 bg-blue-500"></span>
             <h2 className="text-4xl font-prata font-[600] text-blue-500 my-3">Shop By Brands
             </h2>
            <span className="w-80 block h-1 bg-blue-500"></span>
         </div>


         <div className='grid grid-cols-2 ml-10  md:flex items-center justify-between'>
            <img className='w-28' src={logo1} alt="" />
            <img className='w-28' src={logo2} alt="" />
            <img className='w-28' src={logo3} alt="" />
            <img className='w-28' src={logo4} alt="" />
            <img className='w-28' src={logo5} alt="" />
            <img className='w-28' src={logo6} alt="" />
         </div>
        </div>
    );
};

export default ShopByBrands;