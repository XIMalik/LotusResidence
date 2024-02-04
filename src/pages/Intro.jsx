import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Intro = () => {
  return (
    <div className="px-10 pb-[60px] pt-[30px] flex justify-center items-center flex-col lg:flex-row gap-6">
      <div className="text text-center flex flex-col gap-4 lg:text-left w-[100%] lg:w-[50%]">
        <h1 className="text-lg lg:text-2xl lg:leading-loose text-[#d5934d]">
          Experience our short-term accommodations near the city's hot spots,
          offering a choice between studio, one-bedroom, and two-bedroom
          apartments.
        </h1>
        <span className="leading-loose text-[#1B1D42]/50 hidden md:flex">
          The studio, ideal for individuals or couples, provides an
          efficient living space. Our
          one-bedroom apartments offer a comfortable retreat, while our
          two-bedroom units are perfect for families or groups requiring more
          space.
        </span>
      </div>
      <div className="image w-[100%] lg:w-[50%] h-full">
        {/* <div className="w-full h-full bg-black overflow-hidden rounded-md">
            <img
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="object-cover w-[100%] h-[100%]"
            />
      </div> */}

<Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[400px] rounded-md"
    >
      <SwiperSlide className="w-full h-full">
        <div className="w-full h-full overflow-hidden rounded-md">
            <img
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="object-cover w-[100%] h-[100%]"
            />
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <div className="w-full h-full overflow-hidden rounded-md">
            <img
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="object-cover w-[100%] h-[100%]"
            />
        </div>
      </SwiperSlide>
    </Swiper>
      </div>
    </div>
  );
};

export default Intro;
