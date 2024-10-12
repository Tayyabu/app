import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 text-center">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-5">
          <Link href="/about" className="text-white no-underline mx-2">About Us</Link>
          <Link href="/contact" className="text-white no-underline mx-2">Contact</Link>
          <Link href="/services" className="text-white no-underline mx-2">Services</Link>
         
          
          <Link href="/privacy-policy" className="text-white no-underline mx-2">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-white no-underline mx-2">Terms of Service</Link>
        </div>
        <div className="mb-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-2">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-2">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-2">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-2">Pinterest</a>
        </div>
        <div className="mb-5">
          <p>Subscribe to our newsletter for the latest updates</p>
          <form action="/subscribe" method="post" className="flex justify-center">
            <input type="email" name="email" placeholder="Enter your email" required className="p-2 rounded-l border-none" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">Subscribe</button>
          </form>
        </div>
        <p>&copy; 2024 Clothing Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
