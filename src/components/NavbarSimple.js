import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
 
function NavList() {
  return (
    <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-extralight"
      >
        <Link to="bio" spy={true} smooth={true} offset={50} duration={500} className="flex items-center hover:text-secondary transition-colors">
          Biography
        </Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-extralight"
      >
        <a href="#" className="flex items-center hover:text-secondary transition-colors">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-extralight"
      >
        <a href="#" className="flex items-center hover:text-secondary transition-colors">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-extralight"
      >
        <a href="#" className="flex items-center hover:text-secondary transition-colors">
          Contact me
        </a>
      </Typography>
    </ul>
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
    <Navbar className="bg-gradient-to-r from-hoverColor via-primary to-hoverColor shadow-hoverColor shadow-sm mx-auto px-6 py-2 sticky top-0 z-50 w-100">
      <div className="flex items-center justify-between ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="font-bold mr-4 cursor-pointer py-1.5"
        >
          Portfolio
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
      <MobileNav open={openNav}>
        <NavList />
      </MobileNav>
    </Navbar>
  );
}