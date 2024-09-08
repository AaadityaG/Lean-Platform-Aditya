import React from "react";

const Navbar = () => {
  return (
    <div
      style={{ font: "'Inter', sans-serif" }}
      className="w-full h-[63px] lg:h-[90px] md:h-[90px] bg-primary flex items-center justify-start"
    >
      <div className="flex  items-center justify-start gap-1 ml-5 relative">
        <img src="/rainbow.png" alt="Logo" className="w-[40px] lg:w-[80px] md:w-[80px]" />
        <span className="font-bold text-[24px] text-dark-primary italic">
          Loveto
        </span>
        <span className="lg:text-md text-sm">Create your love timeline</span>
        <div className="absolute lg:left-[80px] lg:bottom-[10px] left-[46px] bottom-[-10px] flex items-center gap-1">
          <span className="text-[10px]">Powered by</span>
          <img src="https://loveto.greetsu.com/logo.svg" alt="svg" className="w-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
