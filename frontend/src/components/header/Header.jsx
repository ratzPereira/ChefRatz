import React from "react";
import logo from "/logo.png";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "../MobileNav.jsx";

function Header(props) {
  const [hideLeft, setHideLeft] = React.useState("-left-[1000px]");

  const menuItems = ["Recipes", "Resources", "About", "Contact"];

  const onOpen = () => {
    setHideLeft("left-0");
  };

  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} Logo={logo} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          Logo={logo}
          onClose={onClose}
          onOpen={onOpen}
          hideLeft={hideLeft}
        />
      </div>
    </>
  );
}

export default Header;
