import { Link, Navigate, NavLink, } from 'react-router-dom';
import logo from './../../../assets/image/logo.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HiXMark } from 'react-icons/hi2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';






const Navbar = () => {

    const {signOutUser,user} =useContext(AuthContext);
    const [visible,setVisible]= useState(false);
    const [userName,setUserName] = useState(false);
    
    
    const handleSignOut = () =>{
        signOutUser()          
        Navigate('/login')
        .then(() => {
            // ('sign out successfully');
            Navigate('/login')
        })
        .catch(error => {
            console.log(error.code);
            
            
        })
    }

    
     const link = <>
                <li className='ml-2 '><NavLink to={'/'}>Home</NavLink></li>
                <li className='ml-2'><NavLink to={'/all-art-&-craft'}>All Art & craft</NavLink></li>                
                <li className='ml-2'><NavLink to={'/blog'}>Blog</NavLink></li>                
               {
                user && <>
                                <li className='ml-2'><NavLink to={'/add-craft'}>Add Craft</NavLink></li>                
                                <li className='ml-2'><NavLink to={'/my-art&craft'}>My Art&Craft</NavLink></li>
                </>
                
               }
     </>
     const MobileLink = <>
                <li onClick={() => setVisible(!visible)} className='ml-2 mt-4 '><NavLink to={'/'}>Home</NavLink></li>
                <li onClick={() => setVisible(!visible)} className='ml-2 mt-4'><NavLink to={'/all-art-&-craft'}>All Art & craft</NavLink></li>                
                <li onClick={() => setVisible(!visible)} className='ml-2 mt-4'><NavLink to={'/add-craft'}>Add Craft</NavLink></li>                
                <li onClick={() => setVisible(!visible)} className='ml-2 mt-4'><NavLink to={'/my-art&craft'}>My Art&Craft</NavLink></li>
     </>
    
    return (

        <>
        <div className="flex border-b mb-2 items-center justify-between py-5 font-medium">
           <Link to={'/'}> <img src={logo} className='w-16' alt="" /></Link>
            
            <ul className='hidden sm:flex gap-5 first-letter:text-sm text-gray-700'>
                     {link}           
            </ul>

            <div className='flex items-center gap-6'>
                
                 {
                    user ?  <div className='flex items-center relative ' >
                    <img
                    
                    onMouseOver={() => setUserName(!userName)}
                    onMouseOut={() => setUserName(!userName)}
                    className='w-10 h-10 cursor-pointer rounded-full' src={user.photoURL} alt="" />
                     <p 
                     className={`absolute top-0 left-[-80%] rounded-md  bg-slate-700 text-white p-2  ${userName ? '' : 'hidden'}`}>
                    {user.displayName}</p>
                    <button onClick={() => handleSignOut()} className='btn ml-4 bg-red-400 font-bold text-white hover:bg-red-500'>Sign Out</button>
                </div> 
                :
                  
                <div>
                   <Link to={'/login'}><button className='btn mr-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>Login</button></Link>
                   <Link to={'/register'}><button className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 btn mr-3 bg-yellow-300 font-bold text-white'>Create Account</button></Link>
                </div>
                 }
                

                   

               <button 
               onClick={() => setVisible(!visible)}>
               <HiOutlineMenuAlt3 className='text-2xl sm:hidden cursor-pointer'/>
               </button>
            </div>
            {/* sidebar menu for small screens */}
            {visible ? 
                <div className={`absolute z-10 top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                  <div className='flex items-center gap-4 p-3'>
                       <button
                         onClick={() => setVisible(!visible)}
                         className='flex items-center'><HiXMark className='text-2xl'/>Back
                       </button>
                  </div>
                  <div className='flex'> 
                  <Link to={'/'}> <img src={logo} className='w-16' alt="" /></Link>
                  <h2 className='text-2xl'>The Art Lad Store</h2>
                  </div>
                   {MobileLink}
                </div>
             </div>
             : 
             ''
         }
        
        </div>
        
        </>
    );
};

export default Navbar;