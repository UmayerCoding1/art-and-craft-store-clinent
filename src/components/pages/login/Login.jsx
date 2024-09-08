import { Link } from 'react-router-dom';
import loginPic from './../../../assets/image/login.png';
import googleIcon from './../../../assets/image/google.png';
import { FaFacebook } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import {ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {signInUser,signInWithGoogle} = useContext(AuthContext);
   const googleProvider = new GoogleAuthProvider();
    const handleLoginUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
      
        signInUser(email,password)
        .then(result => {
            const user =  result.user;
            console.log(user);
            
            toast.success('User Login successfully')
        })
        .catch(error => {
            toast.error(error.code)
        })
    }

    const handleSignInGoogle = () => {
        signInWithGoogle(googleProvider)
        .then(result => {
            console.log(result.user);
            toast.success('Login successfully')
        })
        .catch(error => {
             toast.error(error.code)
        })
    }


    return (
        <div>
            <dir className='  md:flex  items-center p-8'>
                <div className='md:w-[50%]'>
                  <img src={loginPic} alt="" />
                </div>
                <div className=' md:w-[50%] md:ml-16 rounded-md shadow-lg  bg-white p-7'>
                     <h2 className='text-3xl font-[600] text-center mb-3 font-prata'>LOGIN</h2>

                    <form onSubmit={handleLoginUser}>
                    <div className='from-control'>
                       <label className='text-left pl-2' htmlFor="email">Email</label>
                        <input
                         className='bg-transparent border-2 pl-2 outline-none border-gray-400 rounded-lg mb-3 w-full h-14 '
                         type="email"
                         name="email"
                         id="" />
                    </div>

                    <div className='from-control'>
                       <label className='text-left pl-2' htmlFor="password">Password</label>
                        <input
                         className='bg-transparent border-2 pl-2 outline-none border-gray-400 rounded-lg mb-3 w-full h-14 '
                         type="password"
                         name="password"
                         id="" />
                    </div>

                    <div className='flex items-center justify-center'>
                        <button
                         onClick={() => handleSignInGoogle()}
                        className='mr-2'><img className='w-10' src={googleIcon} alt="" /></button>
                        <button className=' ml-2 text-3xl text-blue-500'> <FaFacebook/></button>
                    </div>

                    <div>
                            <input className='btn btn-primary w-full mt-2' type="submit" value="Login" />
                         </div>

                         <div>
                            <p className='mt-4 text-center'>Create a new account please <Link to={'/register'}><span className='btn-link font-semibold pl-2 link'>REGISTER</span></Link></p>
                         </div>

                    </form>
                </div>
                <ToastContainer/>
            </dir>
        </div>
    );
};

export default Login;