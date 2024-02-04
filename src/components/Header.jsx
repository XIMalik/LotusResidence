import React from "react";
import logo from "/public/images/logo.png"

const Header = () => {
  return (
    <div className="header flex flex-col sm:flex-row gap-1 justify-center items-center text-center p-5">
      <div className="title text-2xl font-extrabold text-[#d5934d]">Lotus Residence Ilorin</div>
    </div>
  );
};

export default Header;