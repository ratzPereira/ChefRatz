import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function MobileNav({ menuItems, Logo, onClose, onOpen, hideLeft }) {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" className="h-12" />
      </a>
      <button onClick={onOpen} className="border border-primary rounded">
        <HiBars3BottomRight className="h-7 w-7" />
      </button>
      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute top-32 right-8">
          <RiCloseCircleLine className="h-7 w-7" />
        </button>
        <div>
          <ul className="flex flex-col gap-5">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Login
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
