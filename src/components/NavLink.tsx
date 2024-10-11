"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type NavLinkProps = Omit<ComponentProps<typeof Link>, "className">;
function NavLink(props: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "font-semibold",
        props.href === pathname && " underline "
      )}
    />
  );
}

export default NavLink;
