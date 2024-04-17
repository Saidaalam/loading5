import { useEffect } from "react";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navbar/Navbar";

const SpecialOffers = () => {
    useEffect(() =>{
        document.title = "LuxeNext | SpecialOffer";
   },[]);
  return (
    <div>
      <NavBar />
      <div
        className="relative"
        style={{
          backgroundImage: "url('https://i.postimg.cc/1zWVbShw/beach4.png')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-45" style={{ mixBlendMode: 'multiply' }} />

        <div className="container relative flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl font-semibold leading-none text-center text-white">Get Our Updates</h1>
          <p className="pt-2 pb-8 text-xl text-white text-center">Find out about events and other news</p>
          <div className="flex flex-row">
            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 bg-white bg-opacity-90" />
            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-600 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpecialOffers;
