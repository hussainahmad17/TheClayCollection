// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white p-16 text-sm">
//       <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//         {/* Exclusive Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
//           <p className="mb-3">Get 10% off your first order</p>
//           <form className="flex border-2 border-white rounded-md px-4 py-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-10 flex-1 rounded-l-md bg-transparent outline-none text-white"
//             />
//             <button
//               type="submit"
//               className="rounded-r-md"
//             >
//               <i className="fa-regular fa-paper-plane"></i>
//             </button>
//           </form>
//         </div>

//         {/* Support Section */}
//         <div className="space-y-3">
//           <h3 className="text-lg font-semibold mb-3 ">Support</h3>
//           <p>Johr Town, Lahore, Pakistan</p>
//           <p>theclaycollectionofficial@gmail.com</p>
//           <p>+92 3094553362</p>
//         </div>

//         {/* Quick Link Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
//           <ul className="space-y-2">
//             <li>About Us</li>
//             <li>Products</li>
//             <li>FAQ</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         {/* Download App Section */}
//         <div>
//           <div className="flex space-x-4 mt-5">
//             <a href="#" className="text-xl">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#" className="text-xl">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="text-xl">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="text-xl">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-10 text-gray-500 text-sm">
//         &copy; Copyright <Link className="hover:text-white hover:underline" href="/">TheClayCollection</Link> 2022. All right reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 md:p-16 text-sm">
      <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="mb-3">Get 10% off your first order</p>
          <form className="flex border-2 border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent outline-none text-white"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 cursor-pointer"
            >
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Johr Town, Lahore, Pakistan</li>
            <li>theclaycollectionofficial@gmail.com</li>
            <li>+92 3094553362</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline cursor-pointer">
                Products
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline cursor-pointer">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-xl cursor-pointer">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#" className="text-xl cursor-pointer">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="https://www.instagram.com/theclaycollectionofficial7?igsh=MXBkZThlMTVqYXI3aw==" className="text-xl cursor-pointer">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-xl cursor-pointer">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        &copy; Copyright{" "}
        <Link href="/" className="hover:text-white hover:underline cursor-pointer">
          TheClayCollection
        </Link>{" "}
        2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

