import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'animate.css';

const Slider = () => {
  return (
    <Swiper className='rounded-xl'
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(images/private.png)'}}>
    <div className="hero-overlay bg-opacity-45"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="w-full">
      <h1 className="mb-5 w-full text-5xl font-bold">Discover Unparalleled Luxury</h1>
      <p className="mb-5">Embark on a Journey of Extraordinary Elegance and Opulence with LuxeNest: <br/>Where Every Home Tells a Story of Luxury and Refinement.</p>
      <button className="btn bg-slate-900 text-white border-none">Search Property</button>
    </div>
    </div>
    </div>
</SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(images/penthouse.png)'}}>
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="w-full">
      <h1 className="mb-5 w-full text-5xl font-bold">Discover Unparalleled Luxury</h1>
      <p className="mb-5">Embark on a Journey of Extraordinary Elegance and Opulence with LuxeNest: <br/>Where Every Home Tells a Story of Luxury and Refinement.</p>
      <button className="btn bg-slate-900 text-white border-none">Search Property</button>
    </div>
    </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(images/beachSide.png)'}}>
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="w-full">
      <h1 className="mb-5 w-full text-5xl font-bold">Discover Unparalleled Luxury</h1>
      <p className="mb-5">Embark on a Journey of Extraordinary Elegance and Opulence with LuxeNest: <br/>Where Every Home Tells a Story of Luxury and Refinement.</p>
      <button className="btn bg-slate-900 text-white border-none">Search Property</button>
    </div>
    </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(images/mansion.png)'}}>
    <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="w-full">
      <h1 className="mb-5 w-full text-5xl font-bold">Discover Unparalleled Luxury</h1>
      <p className="mb-5">Embark on a Journey of Extraordinary Elegance and Opulence with LuxeNest: <br/>Where Every Home Tells a Story of Luxury and Refinement.</p>
      <button className="btn bg-slate-900 text-white border-none">Search Property</button>
    </div>
    </div>
    </div>
      </SwiperSlide>
    </Swiper>
  );
};
 
export default Slider;