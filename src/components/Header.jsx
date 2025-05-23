import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex,setActiveIndex] = useState(0)
  const navLinks = [
    { id: 0, link: "home" },
    { id: 1, link: "about" },
    { id: 2, link: "works" },
    { id: 3, link: "skills" },
    { id: 4, link: "contact" },
  ];

  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <a onClick={()=>setActiveIndex(link.id)} className={activeIndex === link.id ? "border-b-s-color border-b-[3px]" : ""} href={`#${link.link}`}>{link.link}</a>
      </li> 
    );
  })
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      ></div>
      {/* header  */}
      <header className="flex items-center justify-between py-4 px-dyp z-30 sticky">
        {/* avatar + name  */}
        <div className="header__avatarWithInfo">
          <img
            className="max-sm:hidden w-[50px] rounded-full"
            src="me.webp"
            alt="Ali AbdElbagi picture"
          />
          <div className="header__info mt-2 text-p-color">
            <h2 className={`text-lg font-bold sm:text-xl`}>Ali AbdElbagi</h2>
            <p className="text-xs font-semiboldbold">Front End Developer</p>
          </div>
        </div>
        {/* nav */}
        <nav aria-label="mainNav">
          {/* show hamburger menu on the mobile screen */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-p-color cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-controls="mobileMenu"
            aria-label={isMenuOpen ? "close menu" : "open menu"}
          >
            <img
              src={isMenuOpen ? "./icon-close.svg" : "./icon-hamburger.svg"}
              alt=""
              aria-hidden="true"
            />
          </button>

          {/* mobile nav */}
          <ul
            id="mobileMenu"
            className={
              isMenuOpen
                ? "flex flex-col justify-center items-center absolute right-0 mt-4 w-full text-center bg-n-color min-h-90 [&_li]:w-fit [&_a]:px-4 [&_a]:py-2 [&_a]:min-w-[90px] [&_a]:inline-block [&_a]:bg-bg-color [&_a]:text-p-color [&_a]:my-4 [&_a]:rounded-[5px] [&_a]:capitalize [&_a]:font-semibold [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white"
                : "hidden"
            }
          >
            {links}
          </ul>

          {/* desktop nav */}
          <ul className="hidden sm:flex space-x-8  min-h-[90px] [&_li]:w-fit  [&_a]:px-4 [&_a]:py-2  [&_a]:inline-block  [&_a]:capitalize [&_a]:font-semibold [&_a]:text-p-color [&_a]:hover:border-b-[3px] [&_a]:hover:border-s-color [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-offset-2 [&_a]:focus:ring-white">
            {links}
          </ul>
        </nav>
      </header>
    </>
  );
}
