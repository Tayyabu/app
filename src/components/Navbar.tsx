import NavLink from "./NavLink";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import MobileNavigation, { MobileNavigationProps } from "./MobileNavigation";
import Image from 'next/image'
import logo from "@/app/public/IMG-20241012-WA0027-removebg-preview.png"
function Navbar() {
  const links = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
    {
      href: "/services",
      title: "Servces",
    },
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
    },
    ,
    {
      href: "/terms-of-service",
      title: "Terms of Service",
    },
  ] as MobileNavigationProps[] ;
  return (
    <header className="flex w-full shadow-sm p-5 items-center gap-10 justify-between">
      <Link href={"/"} className="text-3xl">
 <Image src={logo} height={130} width={200} alt="Snitch logo"/>

      </Link>
      <nav className="grow hidden lg:flex md:flex gap-8 font-mono justify-center">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/about"}>About </NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
        <NavLink href={"/services"}>Services</NavLink>

        <NavLink href={"/privacy-policy"}>Privacy Policy</NavLink>
        <NavLink href={"/terms-of-service"}>Terms of Service</NavLink>
      </nav>
      <div className="flex gap-3 items-center">
        <div className="flex ">
          <ShoppingBasket size={40} className=" cursor-pointer" />
          <span className="bg-black rounded-2xl size-5 font-semibold text-white  text-center flex justify-center items-center left-9">
            {0}
          </span>
        </div>
        <div className="block cursor-pointer lg:hidden md:hidden">
          <MobileNavigation links={links} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
