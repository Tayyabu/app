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
  
<svg version="1.1" viewBox="0 0 2048 1354" width="323" height="146" xmlns="http://www.w3.org/2000/svg">
<path transform="translate(380,564)" d="m0 0h144l8 7 13 12 8 7 12 13 14 15 10 10-12 12-7 8-6 7-7 6-5 5-5 4-5-1-8-8-7-5v137l-2 1h-144l-3-2v-134l-6 4-8 7-6-1-10-10-6-5-7-8-8-7-6-8v-5l6-8 8-7 21-21 7-8z" fill="#E7D194"/>
<path transform="translate(664,534)" d="m0 0h31l1 1 1 46v228l-1 25-1 1h-54l-3-1-3-27-8-96-4-54-2-13-4 53-3 34-5 64-2 20-1 18-6 2h-49l-4-2v-160l5-4 8-10 32-32-10-9-5-4-7-8-11-11v-2h-2l-7-8-3-4-1-3v-19l1-23 1-1z" fill="#E6D093"/>
<path transform="translate(548,535)" d="m0 0h37l8 4 4 4 1 9 1 13 1 16 1 6-1 3 1 13-1 4v11l-2 11 2 8-1 7 1 2v18l-1 10 2 13v63l1 4v13l1 12-1 5v7l-1 9v20l-3 12-1 2-46 1-4-2v-160l5-4 8-10 32-32-10-9-5-4-7-8-11-11v-2h-2l-7-8-3-4-1-3v-19l1-23z" fill="#C7A872"/>
<path transform="translate(1560,563)" d="m0 0h22l2 1 1 97 14-14 15-10 11-5 10-3 7-1h16l12 3 16 6 11 8 7 8 8 16 3 11 2 25 1 79v27l-1 2-4 1h-9l-9-1-1-1-1-14v-67l-1-33-2-15-5-13-6-8-9-6-8-4-12-2h-10l-13 4-14 7-9 8-9 12-5 10-4 18-1 10-1 94-4 1h-18l-2-1-1-30v-219z" fill="#A1754B"/>
<path transform="translate(842,563)" d="m0 0h13l15 4 10 4 11 8 11 12 6 8 1 6-7 8-5 4h-9l-18-18-10-6-11-3-11 1-12 6-6 7-4 9-1 4v10l3 10 6 9 9 9 13 10 11 8 14 11 13 11 8 7 8 8 9 14 5 15 1 5v12l-4 15-6 12-12 13-11 8-13 6-11 3-14 1-16-2-14-5-11-6-14-12-9-11-6-9-1-6 5-5 8-6 8-1 7 8 9 13 7 7 15 7 8 2h9l8-2 16-7 7-7 4-7 2-8v-15l-3-11-5-8-6-7-14-11-15-10-13-9-13-10-9-8-8-10-8-13-3-10-2-13v-11l5-15 6-10 9-10 11-7 13-4z" fill="#A1754B"/>
<path transform="translate(498,565)" d="m0 0h28l11 11 11 9 8 8 7 8 16 17 10 10-12 12-7 8-6 7-7 6-5 5-5 4-5-1-8-8-7-5v137l-22-1-5-3-4-1v-2l-3-1v-2h-2l-2-6 1-5-1-22 1-27 1-26 1-20v-67l2-13v-12l-1-11 3-8z" fill="#C7A872"/>
<path transform="translate(379,565)" d="m0 0h17l11 1 4 4 1 6v14l1 4 1 33v16l-1 32-1 8 1 17v11l1 20 1 8 1 5v33l-2 8-13 7h-18l-4-2-1-3v-129l-6 4-8 7-6-1-10-10-6-5-7-8-8-7-6-8v-5l6-8 8-7 21-21 7-8z" fill="#C7A872"/>
<path transform="translate(1035,627)" d="m0 0h13l16 3 13 5 11 7 10 9 9 14 4 11 3 20 1 23v91l-2 3h-20l-2-5-1-101-1-16-3-13-5-10-5-5-9-6-15-4h-22l-14 3-14 7-7 6-7 11-3 15-3 24-1 88-2 6h-21l-1-1-1-12v-85l4-29 4-15 6-11 8-10 8-7 11-7 14-5 13-3z" fill="#C7A872"/>
<path transform="translate(1428,623)" d="m0 0h10l18 2 21 7 14 7 10 7 10 9 4 6-1 4-5 6-8 5-5-1-13-13-14-9-11-4-14-3h-26l-15 4-14 7-12 11-8 9-8 16-3 11-1 7v11l3 17 7 16 10 14 10 8 16 8 11 3 15 2h14l14-3 13-5 10-6 13-11 5-5 5 2 12 9-2 6-11 12-10 7-16 8-16 5-22 4h-14l-17-3-16-5-16-8-14-11-7-7-7-10-8-14-5-16-2-12v-18l5-19 5-13 8-13 9-10 5-5 10-9 16-9 15-5 11-2z" fill="#E7D194"/>
<path transform="translate(685,534)" d="m0 0h10l1 1 1 46v228l-1 25-1 1-21-1-4-2-3-12-1-8v-13l1-8v-24l1-19v-168l1-5v-19l2-15 2-5-3-1z" fill="#A0744A"/>
<path transform="translate(664,534)" d="m0 0h21v1l-12 1-1 5-2 18v17l-1 4v170l-1 17v25l-1 11v14l3 13 4 3 12 1v1h-17l-21-1-3-9-3-11v-4h2v-2h-2l-1-9 1-9v-45l1-7v-25l-1-20v-65l1-13-1-13v-26l1-4 1-22 2-7 6-7-2-1z" fill="#C7A872"/>
<path transform="translate(1223,561)" d="m0 0 21 1 1 86 42 1v18l-1 1-41 1v84l2 11 4 9 8 11 5 4 5 2 13 1 10-3 5-1 5 12 1 6-8 4-16 4h-10l-16-5-8-6-8-7-7-10-6-15-3-17v-191z" fill="#E7D194"/>
<path transform="translate(587,632)" d="m0 0 2 1-15 15-2 3v17l1 7 1 12 1 18v14l1 17v30l1 8-1 15 1 16-2 24-6 5-18 1-4-2v-160l5-4 8-10z" fill="#A1754B"/>
<path transform="translate(1160,631)" d="m0 0h12l12 1v180l-2 1h-21l-1-1z" fill="#E7D194"/>
<path transform="translate(1061,630)" d="m0 0 9 2 14 7 10 8 7 8 6 10 4 11 3 20 1 23v91l-2 3h-20l-2-5-1-101-1-16-3-13-7-14 9 4 5 6 3 3v2l4-1-3-10-5-10v-4h-2l-1-3-2-1v-2l-4-2-2-3-7-4-4-2v-2l-5-1-3-1z" fill="#E6D093"/>
<path transform="translate(1428,623)" d="m0 0h10l18 2 21 7 14 7 10 7 10 9 4 6-1 4-5 6-8 5-5-1-13-13-14-9-11-4-14-3-30-1-9 2h-13l-5-2 1-4 4-4h2v-2l11-6 9-3 8-1h6z" fill="#C8A973"/>
<path transform="translate(1498,760)" d="m0 0 5 2 12 9-2 6-11 12-10 7-16 8-16 5-22 4h-14l-11-2-1-3-4-1-12-5-8-9v-2l-2-1 4-2 17 2h6l1-1 15 1h14l14-3 13-5 10-6 13-11z" fill="#C8A973"/>
<path transform="translate(540,581)" d="m0 0 4 1 10 9 11 12 14 15 10 10-12 12-7 8-6 7-7 6-5 5-5 3 2-4 4-5-4 3-7-1v-3l-3-1-3-9v-26l1-7v-13l1-15 2-4z" fill="#A0744A"/>
<path transform="translate(357,590)" d="m0 0 4 2 2 3v9l1 6 1 15 3 16v8l1 9-2 4-3 2h-8l-11-8-11-12-7-6-6-8v-5l6-8 8-7 15-15 5-3h2z" fill="#A0754A"/>
<path transform="translate(548,535)" d="m0 0h18l5 10 2 18v14l1 6-1 8-3 9 7 8 12 13 4 5-5-2-9-9-6-5-7-8-7-7v-2h-2l-7-8-3-4-1-3v-19l1-23z" fill="#A0754A"/>
<path transform="translate(1169,557)" d="m0 0h7l8 4 5 6 2 5v10l-4 7-6 5-2 1h-13l-6-3-6-7-2-6 1-8 4-6 7-6z" fill="#E7D194"/>
<path transform="translate(1101,701)" d="m0 0 4 1 1 4 1 6 1 15 1 10v29l2 12v10l-2 10-2 3-5 4v-3h-3l-4-7 1-24 2-9-1-14-1-7v-20l2-12z" fill="#C7A872"/>
<path transform="translate(958,723)" d="m0 0 2 2 2 7 2 1v7l2 5-1 4 3 5-2 4 4-1v5l-4 3 1 9-2 2h3l2 10-2 5h-2v-2h-2l-2 11h-2l1 5v3h7l9 3-1 2h-18l-1-1-1-12 1-72z" fill="#A2764C"/>
<path transform="translate(1560,563)" d="m0 0h22l2 1v43h-1l-1-38-6-2-7 1-3 2h-4v-5h-2v39h-1v-40z" fill="#C9AB74"/>
<path transform="translate(1160,698)" d="m0 0h1l2 67v21l-2 12h-1z" fill="#C7A872"/>
<path transform="translate(979,739)" d="m0 0h1l1 8-1 55-2-3-1-13-1-20v-7l2-12v-7z" fill="#A0744A"/>
<path transform="translate(958,807)" d="m0 0 5 1 10 1 4 3-1 1h-18z" fill="#A0744A"/>
<path transform="translate(1102,808)" d="m0 0h2v2h7v2l-2 1h-14l-1-2z" fill="#BA9764"/>
<path transform="translate(1162,810)" d="m0 0 19 1-3 2h-17z" fill="#C8AA73"/>
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
