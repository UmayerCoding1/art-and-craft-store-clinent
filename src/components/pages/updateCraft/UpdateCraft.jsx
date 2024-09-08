import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateCraft = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);

    const navigate = useNavigate();
    const handleCraftUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const rating = form.rating.value;
        const processingTime = form.processingTime.value;
        const craftUpdate = {price,rating,processingTime};
        // console.log(craftUpdate);

        fetch(`https:/art-and-craft-store-tow.vercel.app/products/${loadedUser._id}`,{
          method:'PUT',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(craftUpdate)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
           navigate('/');
          toast.success('Product will be successfully update')
        })
        
    }
    return (
        <div>
           <h2 className="text-2xl text-center font-prata font-bold">Update: {loadedUser.craftName}</h2>

           <form onSubmit={handleCraftUpdate} className="border-2 p-3 rounded-lg">
              <div className="mb-5">
                <label className="pl-3" htmlFor="price">Price</label> <br /> 
                <input className="pl-3 border rounded-lg w-full md:w-1/2 h-10" type="text" name="price" id="" defaultValue={loadedUser.price} placeholder="Update craft price"/>
              </div>
              <div className="mb-5">
                <label className="pl-3" htmlFor="rating">Rating</label> <br />
                <input className="pl-3 border rounded-lg w-full md:w-1/2 h-10" type="text" name="rating" id="" defaultValue={loadedUser.rating} placeholder="Update craft rating"/>
              </div>

              <div className="mb-5">
                <label className="pl-3" htmlFor="price">Processing Time</label> <br />
                <input className="pl-3 border rounded-lg w-full md:w-1/2 h-10" type="text" name="processingTime" id="" defaultValue={loadedUser.processingTime} placeholder="Update craft processing time"/>
              </div>

              <div>
                <input className="btn btn-primary " type="submit" value="Update Craft" />
              </div>
           </form>
           <ToastContainer/>
        </div>
    );
};

export default UpdateCraft;