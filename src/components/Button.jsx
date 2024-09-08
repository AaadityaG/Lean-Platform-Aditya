import React from "react";

const Button = ({ text, className = "", onClick = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`font-inter text-white bg-[#917fb3] font-[550] lg:text-xl md:text-xl text-[16px] rounded-xl hover:bg-dark-primary transition-all px-6 py-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
