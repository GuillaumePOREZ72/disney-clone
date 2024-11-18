import { FaHome, FaPlus, FaSearch, FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import Logo from "../assets/Images/disney-logo.png";
import HeaderItems from "./HeaderItems";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = [
    {
      name: "HOME",
      icon: FaHome,
    },
    {
      name: "SEARCH",
      icon: FaSearch,
    },
    {
      name: "PLUS",
      icon: FaPlus,
    },
    {
      name: "FAVORIS",
      icon: FaStar,
    },
    {
      name: "MOVIES",
      icon: RiMovie2Line,
    },
    {
      name: "SERIES",
      icon: PiTelevisionBold,
    },
  ];

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <img
          src={Logo}
          alt="logo Disney plus"
          className="max-w-[80px] object-cover"
        />
        <div className="hidden md:flex items-center gap-6">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden items-center gap-6">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems
                  key={item.name}
                  name={item.name}
                  Icon={item.icon}
                />
              )
          )}
        </div>
        <div className="relative md:hidden" onClick={handleMenu}>
          <HeaderItems name={""} Icon={BsThreeDotsVertical} />
          {menuOpen ? (
            <div className="absolute mt-3 z-[100] bg-[#060a12] border border-gray-700 px-6 py-3 flex flex-col gap-2 rounded-md">
              {menu.map(
                (item, index) =>
                  index >= 3 && (
                    <HeaderItems
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                    />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1731524999532-642d0c39ad76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
        alt="User image"
        className="w-10 h-10 rounded-full cursor-pointer"
      />
    </div>
  );
}
