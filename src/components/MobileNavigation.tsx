import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import NavLink from "./NavLink";

export type MobileNavigationProps = { href: string; title: string };

export default function MobileNavigation({
  links,
}: {
  links: MobileNavigationProps[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuIcon size={40} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {links.map((link) => (
          <DropdownMenuItem key={link.title}>
            <NavLink href={link.href}>{link.title}</NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
