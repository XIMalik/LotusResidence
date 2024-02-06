import React from "react";

const Rnr = () => {
  return (
    <div className="rnr px-10 py-[60px] flex flex-col relative">
      <h1 className="text-[#d5934d] text-lg text-left">
        Rates & Reservation
      </h1>

      <span className="leading-loose text-[#1B1D42]/50 mb-7 w-full lg:w-[60%]">
        Indulge in comfort at Lotus Residences Shortlets. Thoughtfully designed
        amenities await your arrival for a seamless and enjoyable stay. Welcome
        to your home away from home.
      </span>
      <div className="w-full h-full flex flex-col md:flex-row gap-3 justify-center items-center">
        <div className="holder w-[100%] md:w-[50%] h-full flex">
          <div className="receipt bg-white shadow-lg w-[100%] rounded-md h-fit p-8 flex flex-col justify-evenly">
            <div className="flex justify-between text-xs mb-5 border-dashed rounded-md border-[0.5px] p-3">
              <span className="text-black/30">Type</span>
              <span className="text-black/70">Reservation <span className="text-black/30">/day</span></span>
            </div>
            <hr className="mb-5 border-dotted" />

            <div className="details flex flex-col gap-2">
              <div className="flex justify-between items-center mb-5 border-dashed rounded-xl">
                <span className="text-black/50">Studio apartment</span>
                <span className="text-black/70 ">₦25000.00</span>
              </div>
              <div className="flex justify-between mb-5 border-dashed rounded-xl">
                <span className="text-black/50">1-bedroom apartment</span>
                <span className="text-black/70">₦45000.00</span>
              </div>
              <div className="flex justify-between mb-5 border-dashed rounded-xl">
                <span className="text-black/50">2-bedroom apartment</span>
                <span className="text-black/70">₦60000.00</span>
              </div>
            </div>

            <hr className="mb-5 border-dotted" />

            <h1 className="text-xs bottom-0 text-center text-[#d5934d] ">
              Lotus Residence Ilorin
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[50%] min-h-[50vh] flex flex-col gap-5 justify-center rounded-md p-10 bg-white tomake">
          <h1 className="text-white text-md  text-center">
            To make a reservation or for more inquiries, reach us through either
            of the following avenues
          </h1>
          <div className="icons flex gap-5 justify-center items-center w-full">
            <div className="icon">
              <a href="https://wa.me/+2348065771879">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/whatsapp.png"
                  alt="whatsapp"
                />{" "}
              </a>
            </div>
            <div className="icon">
              <a href="https://instagram.com/lotusresidencesilorin">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="instagram-new"
                />
              </a>
            </div>
            <div className="icon">
              <a href="tel:+2348065771879">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-phone.png"
                  alt="apple-phone"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rnr;
