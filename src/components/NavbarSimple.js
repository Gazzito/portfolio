import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
 
function NavList() {
  return (
    <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-extralight"
      >
        <Link to="bio" spy={true} smooth={true} offset={-45} duration={500} className="flex items-center cursor-pointer hover:text-secondary transition-colors">
          Biography
        </Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-extralight"
      >
        <Link to="skills" spy={true} smooth={true} offset={-45} duration={500} className="flex items-center cursor-pointer hover:text-secondary transition-colors">
          Skills
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-extralight"
      >
         <Link to="projects" spy={true} smooth={true} offset={-45} duration={500} className="flex items-center cursor-pointer hover:text-secondary transition-colors">
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-extralight"
      >
        <a href="#" className="flex items-center hover:text-secondary transition-colors">
          Contact me
        </a>
      </Typography>
    </ul>
  );
}
 
export function MobileNav({ open }) {
  return (
    <Collapse
      className={`${open ? "visible" : "invisible pointer-events-none"} lg:hidden w-full mt-1 `}
      open={open}
    >
      <div className="rounded-lg shadow-lg">
        {open && (
          <div className="flex flex-col gap-2 p-4">
            <NavList />
          </div>
        )}
      </div>
    </Collapse>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="rounded-none max-w-full border-0 bg-gradient-to-r from-hoverColor via-primary to-hoverColor shadow-hoverColor shadow-sm px-6 py-2 sticky top-0 z-50">
      <div className="flex items-center justify-between ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="font-bold mr-4 cursor-pointer py-1.5"
        >

<Link to="home" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
Portfolio
        </Link>
          
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <MobileNav open = {openNav}>
        <NavList />
      </MobileNav>
    </Navbar>
  );
}