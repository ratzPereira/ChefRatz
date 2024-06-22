import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";

function MobileNav({ menuItems, Logo, onClose, onOpen, hideLeft }) {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" className="h-12" />
      </a>
      <button onClick={onOpen} className="border border-primary rounded">
        <HiBars3BottomRight className="h-7 w-7" />
      </button>
      <div>
        <button>
          <RiCloseCircleLine className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
