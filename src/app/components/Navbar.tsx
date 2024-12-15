"use client";

import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { useState } from "react";

interface MenuItem {
  label: string;
  items: string[];
}

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    {
      label: "Capabilities",
      items: [
        "Estimates",
        "Customer Comms",
        "Inventory",
        "Workflow",
        "Empower Techs",
        "Team management",
        "Reporting",
        "Payment Processing",
        "Marketing Suite",
        "Express Lane",
      ],
    },
    {
      label: "Shop Types",
      items: [
        "Auto Repair",
        "Enterprise",
        "Multi-Shop Owners",
        "Tire Shops",
        "Quick Lube",
        "Truck Repair",
        "Wrap and detail",
        "Marine Repair",
      ],
    },
    {
      label: "Resources",
      items: [
        "Resource Library",
        "Shop Legends",
        "Shopmonkey Blog",
        "Webinars",
        "Customer Reviews",
        "Newsroom",
      ],
    },
    {
      label: "Company",
      items: [
        "About Us",
        "Careers",
        "CONTACT US",
        "Call Us",
        "Chat With Us",
        "Email Us",
        "Submit Support Request",
      ],
    },
    {
      label: "Pricing",
      items: ["Plan 1", "Plan 2", "Plan 3"],
    },
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            {/* <a className="flex items-center space-x-2"> */}
              <Image
                src="/shopmonkey-logo.jpg"
                alt="ShopMonkey Logo"
                width={100}
                height={100}
              />
              <span className="text-xl font-bold">shopmonkey</span>
            {/* </a> */}
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 relative">
          {menuItems.map((menuItem, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={`#${menuItem.label.toLowerCase()}`}
                className="hover:text-gray-300"
              >
                {menuItem.label}
              </a>
              {/* Dropdown */}
              {hoveredIndex === index && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                  {menuItem.items.map((item, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex space-x-4">
          <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Request a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// "use client";

// import Image from "next/image";
// import { useState } from "react";

// interface MenuItem {
//   label: string;
//   items: string[];
// }

// const Navbar: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const menuItems: MenuItem[] = [
//     {
//       label: "Capabilities",
//       items: [
//         "Estimates",
//         "Customer Comms",
//         "Inventory",
//         "Workflow",
//         "Empower Techs",
//         "Team management",
//         "Reporting",
//         "Payment Processing",
//         "Marketing Suite",
//         "Express Lane",
//       ],
//     },
//     {
//       label: "Shop Types",
//       items: [
//         "Auto Repair",
//         "Enterprise",
//         "Multi-Shop Owners",
//         "Tire Shops",
//         "Quick Lube",
//         "Truck Repair",
//         "Wrap and detail",
//         "Marine Repair",
//       ],
//     },
//     {
//       label: "Resources",
//       items: [
//         "Resource Library",
//         "Shop Legends",
//         "Shopmonkey Blog",
//         "Webinars",
//         "Customer Reviews",
//         "Newsroom",
//       ],
//     },
//     {
//       label: "Company",
//       items: [
//         "About Us",
//         "Careers",
//         "CONTACT US",
//         "Call Us",
//         "Chat With Us",
//         "Email Us",
//         "Submit Support Request",
//       ],
//     },
//     {
//       label: "Pricing",
//       items: ["Plan 1", "Plan 2", "Plan 3"],
//     },
//   ];

//   return (
//     <nav className="bg-gray-900 text-white">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//               {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <Link href="/">
//             <a className="flex items-center space-x-2">
//          <Image
//             src="/shopmonkey-logo.jpg"
//             alt="ShopMonkey Logo"
//             width={100}
//             height={100}
//           />
//           <span className="text-xl font-bold">shopmonkey</span>
//          </a>
//         </Link>

//         </div>

//         {/* Links */}
//         <div className="hidden md:flex space-x-8 relative">
//           {menuItems.map((menuItem, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <a
//                 href={`#${menuItem.label.toLowerCase()}`}
//                 className="hover:text-gray-300"
//               >
//                 {menuItem.label}
//               </a>
//               {/* Dropdown */}
//               {hoveredIndex === index && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
//                   {menuItem.items.map((item, subIndex) => (
//                     <a
//                       key={subIndex}
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="flex space-x-4">
//           {/* <a
//             href="tel:4086751879"
//             className="hidden md:block text-gray-300 hover:text-white"
//           >
//             Call Us (408) 675-1879
//           </a> */}
//           <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//             Request a Demo
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
