import { Link } from 'react-router-dom';
import registerPic from './../../../assets/image/register.png';
import { FaFacebook } from 'react-icons/fa';
import googleIcon from './../../../assets/image/google.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider, sendEmailVerification, updateProfile } from 'firebase/auth';
import auth from '../../../firebase/firebase.config';

const Register = () => {
  const {createdUser,signInWithGoogle} = useContext(AuthContext);
 const [passError,setPassError] = useState(null);
 const googleProvider = new  GoogleAuthProvider()
 
  const handleUserRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.PhotoURL.value;

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        toast.error('Valid email provide')
        return;
    }
    if(password < 6) {
        setPassError('Please provide at list 6 character');
        return;
    }

    if(!/[A-Z]/.test(password)){
        setPassError('Please provide at list one uppercase character')
        return;
    }

    createdUser(email,password)
    .then(result => {
        const user = result.user;
        console.log(user);
        setPassError(null)

        updateProfile(auth.currentUser,  {
            displayName: name, photoURL: photoUrl
        })
        .then(result => {
            console.log(result.user);
            toast.success(`${name} Thanks for updated profile`)
        })
        .catch(error => toast.error(error.code));
        toast.success('You are successfully register');

        sendEmailVerification(auth.currentUser)
    .then(() => {
        toast.info('Please verify your email address')
    });
    })
    .catch(error => {
        toast.error(error.code);
    })

  }


  const handleSignInWithGoogle = (provider)=> {
    console.log('click');
    
    signInWithGoogle(provider)
  .then(result => {
    console.log(result.user);
    toast.success('You have an account with google')
  })
  .catch(error => {
    toast.error(error.code)
  })
  }
  


    return (
        <div>
            <dir className=' register md:flex  items-center p-8'>
                <div className='md:w-[50%]'>
                  <img src={registerPic} alt="" />
                </div>
                <div className='md:w-[50%] border-2  bg-white p-7'>
                     <h2 className='text-3xl font-[600] text-center mb-3 font-prata'>REGISTER</h2>
                    <form onSubmit={handleUserRegister}>
                    <div className='from-control'>
                       <label className='text-left pl-2' htmlFor="name">Name</label>
                        <input
                         className='bg-transparent border-2 pl-2 outline-none border-gray-400 rounded-lg mb-3 w-full h-14 '
                         type="text"
                         name="name"
                         id="" 
                         required/>
                    </div>

                    <div className='from-control'>
                       <label className='text-left pl-2' htmlFor="email">Email</label>
                        <input
                         className='bg-transparent border-2 pl-2 outline-none border-gray-400 rounded-lg mb-3 w-full h-14 '
                         type="email"
                         name="email"
                         id="" 
                         required
                         />
                    </div>

                    <div className='from-control'>
                       <label className='text-left pl-2' htmlFor="password">Password</label>
                        <input
                         className='bg-transparent border-2 pl-2 outline-none border-gray-400 rounded-lg  w-full h-14 '
                         type="password"
                         name="password"
                         id=""
                         required
                         />
                         {
                            passError ? <p className='mb-3 pl-4 text-red-600'>{passError}</p> : ''
                         }
                    </div>

                    <div className='from-control'>
                       <label className='text-left pl-2' htmlFor="photoUrl">Photo URL</label>
                        <input
                         className='bg-transparent border-2 pl-2 outline-none border-gray-400 rounded-lg mb-3 w-full h-14 '
                         type="text"
                         name="PhotoURL"
                         required
                         id="" />
                         </div>

                            <div>
                            <input className='btn btn-primary w-full mt-2' type="submit" value="Register" />
                         </div>

                         
                         <div>
                            <p className='mt-4 text-center'>You have already account please <Link to={'/login'}><span className='btn-link font-semibold pl-2 link'>LOGIN</span></Link></p>
                         </div>
                    </form>
                    <div className='mt-5 flex items-center justify-center'>
                        <button
                         onClick={() => handleSignInWithGoogle(googleProvider)}
                        className='mr-2'><img className='w-10' src={googleIcon} alt="" /></button>
                        <button className=' ml-2 text-3xl text-blue-500'> <FaFacebook/></button>
                    </div>

                </div>
                <ToastContainer/>
            </dir>
        </div>
    );
};

export default Register;