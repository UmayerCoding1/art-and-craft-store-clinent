import { useLoaderData, useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
const CraftDetailsPage = () => {
  const loadedData = useLoaderData();
  const navigate = useNavigate();
  const {
    craftName,
    customization,
    description,
    photoUrl,
    price,
    processingTime,
    rating,
    stockStatus,
    subcategory,
    userName,
    userEmail,
  } = loadedData;
  const priceInt = parseInt(price);
  const ratingInt = parseInt(rating);
  
  const back = () => {
    navigate(-1);
  }

  return (
    <>
    <p className="text-2xl cursor-pointer" onClick={() => back()}><FaLongArrowAltLeft/></p>
    <div className=" w-full h-[80vh] md:flex p-2 ">
      <div className="w-full h-1/2 md:w-[45%] md:h-full  p-2">
         <img className="w-full rounded-2xl md:w-[100%] h-full" src={photoUrl} alt="" />
      </div>

      <div className="w-full h-1/2 md:w-[45%] md:h-full  p-2">
        <h2 className="text-3xl font-prata font-bold">{craftName}</h2>
        <p className="mt-2 font-bold">Seller Name: {userName}</p>
        <p className="mt-2 text-gray-500">{description} . . . . !</p>
        <p className="mt-2 font-bold">Subcategory: <span className="text-xs pl-1">{subcategory}</span></p>
        
        <div className="md:flex items-center">
        <p className=" font-prata text-sm font-bold mt-2 mr-7 ">Price: $ <span className={`${priceInt > 500 ? 'bg-yellow-400': 'bg-green-400'} py-1 px-1 rounded-lg`}>{price}</span> </p>
        <p className=" font-prata text-sm font-bold mt-3">Rating:  <span className={`${ratingInt > 4 ? 'bg-green-400' : "bg-blue-400"} py-1 px-1 rounded-lg`}>{rating}</span> </p>
        </div>
        <h2 className=" mt-2 flex items-center font-bold">Contact: <CiMail className="ml-3"/> <span className="font-[400]"> {userEmail}</span></h2>
        <p className="font-[600] mt-2">Customization: {customization}</p>
        <div className="md:flex items-center">
        <p className="mt-3 mr-5 font-bold">Stock Status: <span className={`${stockStatus === ' In stock' ? 'bg-yellow-300': 'bg-green-400'} py-2 px-1 rounded-lg`}>  {stockStatus}</span></p>
        <p className="mt-3  font-bold">Processing Time: <span className={`${processingTime > 10 ? 'bg-red-500': 'bg-cyan-300'} py-1 px-1 rounded-lg`}>{processingTime} day. </span></p>
        </div>


      </div>
    </div>
    </>
  );
};

export default CraftDetailsPage;
