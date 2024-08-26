import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import helloEyes from "../app/images/helloEyes.png";

import Image from "next/image";

const menuItems = [
  {
    title: "Eyewear",
    href: "/",
    active: false,
  },
  {
    title: "Contact lenses",
    href: "/#",
    active: false,
  },
  {
    title: "Prescription tools",
    href: "/#",
    active: true,
  },
];

const Navbar = () => {
  return (
    <div className="max-h-screen h-fit min-h-0 w-full absolute z-10">
      <header className="bg-black h-[60px] w-full">
        <div className="max-w-[1920px] h-full mx-auto flex flex-1 justify-start items-center">
          <Image
            className="hover:cursor-pointer h-[26px] w-fit tablet:h-[36px] laptop:mx-[60px] mr-[60px]"
            alt="Your Company Here Logo"
            src={helloEyes}
          />

          {menuItems.map((item) => {
            return (
              <button
                className={`${
                  item.active ? "" : ""
                } hidden laptop:flex mr-[30px] relative flex-col h-full heading-2 justify-center hover:text-accent`}
                key={item.title}
              >
                {item.title}
              </button>
            );
          })}

          <div className="flex ml-auto h-full space-x-[30px] mr-5 tablet:mr-10 laptop:mr-[60px] items-center">
            <button className="h-full flex flex-col justify-center relative text-white hover:text-capri">
              <UserIcon className="size-6 hover:text-accent" />
            </button>
            <button className="h-full flex flex-col justify-center relative text-white hover:text-capri hover:text-darkPrimary">
              <ShoppingCartIcon className="size-6 hover:text-accent" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
