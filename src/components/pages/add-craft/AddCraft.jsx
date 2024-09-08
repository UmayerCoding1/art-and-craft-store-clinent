import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../provider/AuthProvider';
const AddCraft = () => {

  const {user} = useContext(AuthContext);
  console.log(user);
  
    const handleAddCraft = e => {
      e.preventDefault();
      const form = e.target;

      const photoUrl = form.URL.value;
      const craftName = form.name.value;
      const subcategory = form.subcategory.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const processingTime = form.processingTime.value;
      const userName = form.userName.value;
      const userEmail = form.userEmail.value;
      const customization = form.customization.value;
      const stockStatus = form.stockStatus.value;
      const description = form.description.value;

      const products = {photoUrl,craftName,subcategory,price,rating,processingTime,userName,userEmail,customization,stockStatus,description};
      console.log(products);
      
      fetch(' https://art-and-craft-store-server-site.vercel.app/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(products)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success('Craft is successfully add');
        form.reset();
      })
      
    }


  return (
    <div>
      <h2 className="text-3xl mb-1 md:mb-7  font-bold font-prata text-center">
        Add a Craft
      </h2>

      <div className=" md:m-10 border">
        <form onSubmit={handleAddCraft}>
          <div className="m-10   md:flex items-center justify-between ">
            <div className="mb-3">
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="Photourl"
              >
                Photo URL
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md  outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="URL"
                id=""
                placeholder="Enter a photo url"
                required
              />
            </div>
            <div>
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="craftName"
              >
                Craft Name
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="name"
                id=""
                placeholder="Enter Craft name" required
              />
            </div>
          </div>

          <div className="m-10   md:flex items-center justify-between ">
            <div className="mb-3 mb:mb-0">
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="subcategory_Name"
              >
                Subcategory Name
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md  outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="subcategory"
                id=""
                placeholder="Enter subcategory name" required
              />
            </div>
            <div>
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="price"
              >
                Price
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="price"
                id=""
                placeholder="Enter item price" required
              />
            </div>
          </div>

         

          <div className="m-10   md:flex items-center justify-between ">
            <div className="mb-3 mb:mb-0">
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="rating"
              >
                Rating
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md  outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="rating"
                id=""
                placeholder="Enter rating" required
              />
            </div>
            <div>
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="processing time"
              >
                Processing Time
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="processingTime"
                id=""
                placeholder="Enter processing time" required
              />
            </div>
          </div>

          <div className="m-10   md:flex items-center justify-between ">
            <div className="mb-3 mb:mb-0">
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="subcategory_Name"
              >
                User Name
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md  outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="userName"
                defaultValue={user.displayName}
                id=""
                placeholder="Enter user name" required
              />
            </div>
            <div>
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="price"
              >
                User Email
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md outline-none w-[100%] h-11 md:w-96"
                type="email"
                name="userEmail"
                defaultValue={user.email}
                id=""
                placeholder="Enter user email" required
              />
            </div>
          </div>

          <div className="m-10   md:flex items-center justify-between ">
            <div className="mb-3 mb:mb-0">
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="customization"
              >
                Customization
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md  outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="customization"
                id=""
                placeholder="customization ( yes or NO )" required
              />
            </div>
            <div>
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="stock status" required
              >
                Stock Status
              </label>{" "}
              <br />
              <input
                className="border border-black pl-3 rounded-md outline-none w-[100%] h-11 md:w-96"
                type="text"
                name="stockStatus"
                id=""
                placeholder="stockStatus ( stock or Made to Order)" required
              />
            </div>
          </div>

          <div className="m-10   md:flex items-center justify-between ">
            <div className="mb-3 mb:mb-0">
              <label
                className="pl-1 font-prata font-bold text-sm"
                htmlFor="description"
              >
                Description
              </label>{" "}
              <br />
              <textarea
                className="border border-black pl-3 rounded-md outline-none w-[100%] h-32 md:w-96"
                name="description"
                id="" 
                placeholder="Description"  required
              ></textarea>
            </div>
            <div>
              <input
                className="border-2 rounded-lg text-lg font-bold font-prata text-blue-600 btn p-3 border-cyan-400 "
                type="submit"
                value="Add Craft"
              />
            </div>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default AddCraft;
