import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from './../../../provider/AuthProvider';
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const MyArtAndCraft = () => {
    const loadedUserAddedCraft = useLoaderData();
    const {user} = useContext(AuthContext);

    const userCraft = loadedUserAddedCraft.filter(item => item.userEmail === user.email)
    
    const handleProductDelete = _id => {
      console.log(_id);

      fetch(`https://art-and-craft-store-server-site.vercel.app/products/${_id}`,{
        method:'DELETE',
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         toast.success('Products successfully deleted')
         
      })
      
    }
    
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="bg-black text-white">
        
        <th>CRAFT NAME</th>
        <th>SELLER NAME</th>
        <th>CRAFT IMAGE</th>   
        <th>PRICE</th> 
        <th>RATING</th>
        <th>SUB CATEGORY</th>
        <th>UPDATE</th>
        <th>DELETE</th>


      </tr>
    </thead>
    <tbody>
       {
        userCraft.map((item,i) => {
            return([
               <tr key={i}>
                  <td>{item.craftName}</td>
                  <td>{item.userName}</td>
                  <td><img className="w-24" src={item.photoUrl} alt="" /></td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                  <td>{item.subcategory}</td>
                  <td className="text-2xl text-blue-600 cursor-pointer"><Link to={`/update/${item._id}`}><IoPencil/></Link></td>
                  <td
                   onClick={() => handleProductDelete(item._id)}
                  className="text-2xl text-red-500 cursor-pointer"><Link><MdDelete/></Link></td>
               </tr>
            ])
        })
       }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyArtAndCraft;