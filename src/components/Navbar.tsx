import NavLink from "./NavLink";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import MobileNavigation, { MobileNavigationProps } from "./MobileNavigation";

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
      <svg version="1.1" color="black" viewBox="0 0 1920 1080" width="192" height="108" xmlns="http://www.w3.org/2000/svg">
<path transform="translate(0)" d="m0 0h1920v1080h-1920z" fill="#fff"/>
<path transform="translate(882,294)" d="m0 0h14l4 4 1 2-1 9-6 10-11 13-10 10-11 9-13 11-18 13-9 6-4 14-7 32-6 31-8 30-8 21-8 16-10 16-11 13-14 14-17 13-18 12-19 11-21 10-25 9-24 6-20 3-14 1h-21l-16-2-19-5-17-8-8-5-8 17-3 11-1 7v14l3 12 6 10 9 9-1 3-7-1-8-9-6-13-2-7-1-11 2-16 5-15 7-15-11-11-10-14-8-17-4-14-2-13v-25l4-24 8-24 8-16 8-14 10-14 11-13 9-10 8-7 9-8 16-12 16-10 16-9 27-12 23-7 15-3 8-1h20l15 3 12 5 9 6 8 7 7 10 5 12 2 10v25l-2 12 25-14 14-8 6-4 16-32 13-19 12-13 9-9 14-11 14-9 13-6z" fill="#DA639C"/>
<path transform="translate(1526,359)" d="m0 0 4 1-15 25-10 18-14 21-14 22-19 32-17 28-18 30 4-4 10-13 12-13 11-9 12-6 7-2h10l9 2 10 7 6 8 4 10v18l-4 10-14 22-13 21-11 17-3 8 2 7 2 1h10l9-4 11-8 7-6 7-8 9-10 12-16 13-18 6-8 4-1-2 5-14 20-14 18-11 14-12 13-10 8-12 6-7 2h-11l-13-4-8-6-6-9-3-7-1-14 2-10 9-17 28-42 7-12 1-8-4-4-10 1-11 6-15 13-11 12-13 17-10 14-14 22-12 22-11 23-1 3-7-1h-29l-11 1 8-16 20-36-6 7-7 7-7 8-11 10-10 7-12 7-15 5-5 1h-17l-16-4-9-5-9-7-7-10-4-9-1-5v-16l-11 14-9 11-11 12-10 9-12 7-10 3h-13l-8-3-8-5-7-7-4-9-1-4v-14l4-13-12 16-11 13-14 14-11 7-10 4-4 1h-13l-9-4-8-7-6-9-2-7v-14l2-10-11 14-11 12-6 7-11 9-13 7-8 2h-11l-12-4-8-6-6-9-3-8-1-9 2-11 5-12 12-19 20-30 8-14v-8l-4-3h-7l-10 4-12 9-15 15-9 11-12 16-16 24-12 21-13 24-5 9-7-1h-31l-11 1 2-5 19-32 17-28 13-22 12-22 5-14-1-7-1-1h-8l-9 6-12 12-11 14-13 18-4 5-3-1 7-12 14-19 11-13 11-11 10-5 4-1h11l10 4 6 5 6 9 2 6v17l-4 12-1 4 13-19 9-11 11-11 14-10 12-5 5-1h9l10 3 8 6 6 7 4 11v18l-5 13-10 16-24 36-5 10-1 6 5 5h11l11-6 13-11 12-13 11-14 12-16 10-15 17-29 12-20 5-8 7 1h29l12-1-8 14-15 26-9 15-17 29-17 28-4 9v7l1 3 3 1h10l10-5 10-8 14-14 9-11 15-20 21-30 15-26 8-13-23-1 1-4h26l2-5 14-24 11-18 2-1 6 2h28l12-2-8 14-17 29-3 5h31l-2 4-32 1-17 29-15 25-19 32-13 22-4 9v7l4 4h8l11-4 11-7 12-11 7-8 13-16 13-19 7-12 9-11 8-9 11-9 13-9 17-9 18-6 11-2h15l10 4 5 6 3 10v12l-4 16-6 11-7 8-8 5-3 1h-8l-8-4-3-5-1-9 3-10 9-10 24-12 3-5-1-8-4-4-2-1h-8l-11 6-13 12-9 11-11 14-10 15-13 25-5 15-1 10 2 8 5 6 8 4 5 1h12l13-4 15-8 11-9 10-9 9-9 9-11 12-16 10-16 32-56 60-104 11-19 10 1h24z" fill="#DA639C"/>
<path transform="translate(664,337)" d="m0 0h25l15 4 11 6 7 6 9 13 4 11 2 11v18l-3 19-27 16-20 12-24 15-22 14-22 15-17 12-17 13-11 9-8 6-3-10v-18l4-16 7-17 9-16 12-16 9-10 5-6 8-7 10-8 11-7 14-7 10-3h19l9 4 8 7 4 7 1 4v12l3 1v-12l-2-9-6-9-9-6-9-3h-23l-19 5-12 5-17 10-13 10-13 12-11 13-9 14-8 16-5 17-1 5v20l4 15 5 10-28 28-11 14-10 14-2 2-6-8-7-14-4-16-1-8v-27l3-19 4-15 7-19 12-23 14-21 12-16 12-14 17-17 11-9 13-10 21-13 15-7 18-6z" fill="#fff"/>
<path transform="translate(780,402)" d="m0 0 2 1-10 24-13 34-13 29-10 20-12 20-10 14-9 11-12 13-11 11-11 9-13 10-18 11-16 8-16 6-17 4-7 1h-21l-14-2-18-6-15-9-5-5 2-5 9-13 12-14 12-13 13-13 4 2 11 8 14 5h23l12-3 13-5 16-9 11-8 11-9 16-16 11-14 9-13 9-15 10-21 8-23 21-12z" fill="#fff"/>
<path transform="translate(730,431)" d="m0 0 2 1-7 20-9 19-13 21-10 13-9 10-7 8-11 10-15 11-14 8-13 5-12 3h-20l-11-4-9-8-4-6v-2l11-9 13-11 19-14 27-18 25-16 21-13 28-17z" fill="#fff"/>
<path transform="translate(1138,406)" d="m0 0h9l7 4 3 6v12l-7 14-7 9-9 7-11 6-4 1h-10l-6-3-4-5-1-10 4-12 7-10 10-10 12-7z" fill="#DA639C"/>
<path transform="translate(884,299)" d="m0 0h10l2 3-1 7-7 11-14 15-10 9-14 12-16 12-9 6h-2l1-6 8-18 9-16 11-13 10-9 10-7z" fill="#fff"/>
</svg>
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
          <span className="   bg-black rounded-2xl size-5 font-semibold text-white  text-center flex justify-center items-center left-9">
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
