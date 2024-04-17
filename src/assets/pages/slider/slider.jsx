import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../images/private.png';
import slider2 from '../../../../images/penthouse.png';
import slider3 from '../../../../images/beachSide.png';
import slider4 from '../../../../images/mansion.png';
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
    <div className="hero min-h-screen" style={{backgroundImage: `url(${slider1})`}}>
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
      <div className="hero min-h-screen" style={{backgroundImage: `url(${slider2})`}}>
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
      <div className="hero min-h-screen" style={{backgroundImage: `url(${slider3})`}}>
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
      <div className="hero min-h-screen" style={{backgroundImage: `url(${slider4})`}}>
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
