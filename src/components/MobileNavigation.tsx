import { MenuIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import NavLink from "./NavLink"


export default function MobileNavigation({links=[
    {
        href:"/",
        title:"Home"
    },
    {
        href:"/about",
        title:"About"
    },
    {
        href:"/contact",
        title:"Contact"
    },
    {
        href:"/services",
        title:"Servces"
    },{
        href:"/privacy-policy",
        title:"Privacy Policy"
    }
]}:{links?:{href:string,title:string}[]}) {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger><MenuIcon size={40}/></DropdownMenuTrigger>
  <DropdownMenuContent>
    {links.map(link=><DropdownMenuItem key={link.title} ><NavLink href={link.href}>{link.title}</NavLink></DropdownMenuItem>)}

  </DropdownMenuContent>
</DropdownMenu>

  )
}
