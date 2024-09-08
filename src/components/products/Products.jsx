import PropsTypes from 'prop-types';
import Product from '../pages/product/Product';
import { Link } from 'react-router-dom';

const Products = ({loadedProducts}) => {
    console.log(loadedProducts);
    
    return (
        <div className='mt-10 '>
            <div className='md:flex items-center justify-between'>
            <h2 className='link text-4xl font-prata font-bold text-center md:ml-80'>Top craft products</h2>
             <h2 className='link btn btn-link'><Link to={'/all-art-&-craft'}>See all</Link></h2>
            </div>
            <div className='mt-5 md:grid grid-cols-3 gap-5 '>
                 
            {
                loadedProducts.slice(0,6).map(data => <Product key={data._id} data={data}/>)
            }
            </div>
        </div>
    );
};

Products.propTypes = {
    loadedProducts:PropsTypes.array
}

export default Products;