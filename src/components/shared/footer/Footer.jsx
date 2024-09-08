

import logo from './../../../assets/image/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebook ,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-blue-100 text-base-content">
  <div>
    <img src={logo} className='w-[60px] rounded-full' alt="" />
    <p>The Art Lab.<br/>Providing reliable Art & Craft.</p>
    <div className="divider"></div> 
  <p>Copyright &copy; 2024 - All right reserved by <span className='text-blue-600'>Umayer Hossain</span></p>
  </div> 
  <div>
    <span className="footer-title">Contact Information: </span> 
    <p>Address: 1 NO Road, Bohodarhat,Chottogram</p>
    <p>Phone: +8801864055582</p>
    <p>Email: umauerhossain518@gmail.com</p>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Feedback</Link> 
    <Link className="link link-hover">Pricing</Link> 
    
  </div> 
  
  <div>
    <span className="footer-title">Social: </span> 
    <div className="grid grid-flow-col gap-4 text-blue-500">
      <a href="" target='blank'><FaFacebook className='h-10 w-10'></FaFacebook></a>
      <a href="" target='blank'><FaGithub className='h-10 w-10'></FaGithub></a>
      <a href="" target='blank'><FaLinkedin className='h-10 w-10'></FaLinkedin></a>
      <a href="" target='blank'><FaTwitter className='h-10 w-10'></FaTwitter></a>
     
      
    </div>
  </div>
  
  
</footer>

        </div>
    );
};

export default Footer;
