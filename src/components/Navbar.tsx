
import NavLink from './NavLink'
import Link from 'next/link'
import { ShoppingBasket } from 'lucide-react'
import MobileNavigation from './MobileNavigation'

function Navbar() {
  return (
    <header className='flex w-full shadow-sm p-5 items-center gap-10 justify-between'>
      <Link href={"/"} className='text-3xl'>Snitch </Link>
      <nav className='grow hidden lg:flex md:flex gap-8 font-mono justify-center'>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/about'}>About </NavLink>
        <NavLink href={'/contact'}>Contact</NavLink>
        <NavLink href={'/services'}>Services</NavLink>
        
        <NavLink href={'/privacy-policy'}>Privacy Policy</NavLink>
        <NavLink href={'/terms-of-service'}>Terms of Service</NavLink>
      </nav>
 <div className='flex gap-3 items-center'>
     <div className='flex '>
        <ShoppingBasket size={40} className=' cursor-pointer'/>
     <span className='   bg-black rounded-2xl size-5 font-semibold text-white  text-center flex justify-center items-center left-9'>{0}</span>
     </div>
     <div className='block cursor-pointer lg:hidden md:hidden'>
        <MobileNavigation/>
     </div>
 </div>

    </header>
  )
}

export default Navbar
