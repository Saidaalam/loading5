import NavBar from "../shared/Navbar/Navbar";
import nature from '../../../../images/beach2.png';
import Footer from "../shared/Footer/Footer";
import { useEffect } from "react";

const Blogs = () => {
    useEffect(() =>{
        document.title = "LuxeNext | Blogs";
   },[]);
    return (
            <div>
                <div>
            <NavBar />
            <div className="dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-12 mx-auto">
                    <div className="flex flex-col justify-center col-span-12 align-middle  bg-no-repeat bg-cover lg:col-span-6 rounded-xl"  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${nature})`, backgroundBlendMode: "multiply", backgroundPosition: "center", backgroundSize: "cover"}}>
                        <div className="flex flex-col items-center p-8 text-center dark:text-gray-800">
                            <span className="text-white">12 April</span>
                            <h1 className="py-4 text-4xl text-white font-bold">Exploring the Beauty of LuxuNest Properties</h1>
                            <p className="pb-6 text-white">Join us on a journey through the untouched wilderness, where every corner holds a breathtaking surprise.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300" >
                        <div className="pt-6 pb-4 space-y-2">
                            <span>12 April</span>
                            <h1 className="text-3xl font-bold">Luxury Beachfront Villa</h1>
                            <p>Experience the epitome of luxury living with breathtaking ocean views and unparalleled amenities.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span>15 April</span>
                            <h1 className="text-3xl font-bold">Magnificent Mountain Estate</h1>
                            <p>Indulge in the splendor of nature with this stunning mountain retreat offering panoramic views and unparalleled serenity.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span>17 April</span>
                            <h1 className="text-3xl font-bold">Exclusive Penthouse in the Sky</h1>
                            <p>Live above the city in this luxurious penthouse offering stunning skyline views and top-of-the-line amenities.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
        <Footer/>
        </div>
    );
};

export default Blogs;
