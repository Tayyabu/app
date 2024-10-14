import NavLink from "./NavLink";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import { links } from "@/data/links";
import Image from "next/image";
import logo from "@/app/public/IMG-20241012-WA0027-removebg-preview.png";
function Navbar() {
  const allDesktopLinks = links.map((link) => (
    <NavLink href={link.href} key={link.title}>
      {link.title}
    </NavLink>
  ));

  return (
    <header className="flex w-full shadow-lg p-5 items-center gap-10 justify-between">
      <Link href={"/"} className="text-3xl">
        <Image src={logo} height={130} width={200} alt="Snitch logo" />
      </Link>
      <nav className="grow hidden lg:flex md:flex gap-8 font-roboto justify-center">
        {allDesktopLinks}
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
