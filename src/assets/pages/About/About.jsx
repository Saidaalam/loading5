import aboutPic from '../../../../images/about.png';
import NavBar from '../shared/Navbar/Navbar';
import Footer from "../shared/Footer/Footer";
import { useEffect } from 'react';

const About = () => {
  useEffect(() =>{
    document.title = "LuxeNext | About";
},[]);
  
    return (
        <div>
            <NavBar></NavBar>
              <div className="hero mt-10">
  <div className="hero-content flex-col lg:flex-row">
    <img src={aboutPic} className="max-w-lg h-96 rounded-lg shadow-2xl" />
    <div className='ml-10'>
        <p>Who We Are</p>
      <h1 className="text-4xl mt-6 font-bold animate__animated animate__fadeInLeft">We help clients buy and <br/> sell houses since 1989</h1>
      <p className="py-6 animate__animated animate__fadeInLeft">With over $2 Billion in sales, due to our unparalleled results,<br/> expertise and dedication, we rank amongst the top 6 agencies <br/> in Las Vegas. Our agency is the industry’s top luxury producer.</p>
      <button className="btn bg-slate-900 text-white">More About Us</button>
    </div>
  </div>
</div>
<Footer/>
        </div>
    );
};

export default About;