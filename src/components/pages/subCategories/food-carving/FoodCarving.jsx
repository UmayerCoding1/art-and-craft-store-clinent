import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCarving = ({craftData}) => {
    return (
        <div className='md:grid grid-cols-4 gap-4'> 
              {
                craftData.map(item => {
                    const { craftName,
                        description,
                        photoUrl,
                        price,
                        rating,
                        subcategory,
                        _id
                        } = item;

                        const priceInt = parseInt(price);
                        const ratingInt = parseInt(rating);
                    return([
                        <div key={item._id} className="border-2 mb-8 rounded-lg h-[50vh]  md:h-[28rem] p-2 mt-4 ">
                        <div className="w-full h-[50%] rounded-lg">
                          <img className="w-full h-full md:h-[100%] rounded-lg" src={photoUrl} alt="" />
                        </div>
                        <div>
                          <div className="p-0  grow">
                          <h2 className="text-2xl font-bold mt-3 font-prata mb-2">{craftName}</h2>
                          <p className="text-xs font-bold text-gray-500"><span className="text-sm pr-2">Subcategory:</span>{subcategory}</p>
                          <p className="text-xs font-bold text-gray-500 mt-3">{description.slice(0,60)} . . . .</p>
                  
                          <div className="flex items-center">
                          <p className="font-prata text-sm font-bold mt-2 mr-7 ">Price: $ <span className={`${priceInt > 500 ? 'bg-yellow-400': 'bg-green-400'} py-1 px-1 rounded-lg`}>{price}</span> </p>
                          <p className="font-prata text-sm font-bold mt-2">Rating:  <span className={`${ratingInt > 4 ? 'bg-green-400' : "bg-blue-400"} py-1 px-1 rounded-lg`}>{rating}</span> </p>
                          </div>
                          </div>
                  
                          <div className="flex items-center justify-center mt-3 mb-2">
                             <Link to={`/products/$${_id}`}><button className="btn bg-orange-400 hover:bg-orange-400 text-white">View Details</button></Link>
                          </div>
                        </div>
                      </div>
                    ])
                })  
              }
          </div>
    );
};
FoodCarving.propTypes = {
    craftData:PropTypes.array
}
export default FoodCarving;