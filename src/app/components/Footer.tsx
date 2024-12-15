import React from "react";

interface Section {
  title: string;
  links: string[];
}

interface SocialLink {
  icon: JSX.Element;
  url: string;
}

const Footer: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Capabilities",
      links: [
        "Estimates",
        "Customer Comms",
        "Inventory",
        "Payments",
        "Workflow",
        "Empower Techs",
        "Reporting",
      ],
    },
    {
      title: "Shop Types",
      links: [
        "Auto Repair",
        "Enterprise",
        "Tire Shops",
        "Oil Change",
        "Truck Repair",
        "Motorcycle Repair",
      ],
    },
    {
      title: "Resources",
      links: [
        "Resource Library",
        "Shop Legends",
        "Blog",
        "Webinars",
        "Customer Reviews",
      ],
    },
    {
      title: "Company",
      links: ["Pricing", "About Us", "Careers", "Referral Program"],
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24h11.494v-9.294H9.337v-3.622h3.482V8.413c0-3.465 2.116-5.355 5.204-5.355 1.482 0 2.755.11 3.127.16v3.623l-2.147.001c-1.684 0-2.011.801-2.011 1.974v2.59h4.017l-.524 3.623h-3.493V24h6.854c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z" />
        </svg>
      ),
      url: "https://facebook.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M23.499 6.203c-.86.381-1.783.641-2.748.757.988-.592 1.746-1.528 2.102-2.639-.923.545-1.945.942-3.033 1.157-.87-.921-2.107-1.496-3.475-1.496-2.626 0-4.782 2.134-4.782 4.768 0 .373.043.737.123 1.085C7.688 9.447 4.067 7.72 1.64 5.115c-.405.692-.639 1.496-.639 2.35 0 1.622.826 3.053 2.085 3.891-.767-.025-1.49-.234-2.116-.582v.059c0 2.262 1.608 4.152 3.742 4.583-.391.107-.803.165-1.227.165-.299 0-.592-.028-.878-.082.591 1.841 2.306 3.186 4.338 3.222-1.585 1.24-3.582 1.978-5.751 1.978-.373 0-.741-.021-1.104-.065C2.481 20.336 5.429 21.5 8.698 21.5c10.43 0 16.132-8.62 16.132-16.092 0-.248-.006-.496-.018-.742C22.042 7.98 22.806 7.129 23.5 6.203z" />
        </svg>
      ),
      url: "https://twitter.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/shopmonkey-logo.jpg" alt="Logo" className="h-10 w-16" />
            <h2 className="text-lg font-semibold">Any Questions?</h2>
          </div>
          <p>Get in touch! We are here to help.</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89-4.42a1 1 0 011.22 0L21 8M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6"
                  />
                </svg>
              </div>
              <p>
                Call Us: <span className="font-medium">(408) 675-1879</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 21v-2a4 4 0 00-8 0v2m4-16v4m0 0l-2-2m2 2l2-2"
                  />
                </svg>
              </div>
              <p>
                Email Us:{" "}
                <span className="font-medium">info@shopmonkey.io</span>
              </p>
            </div>
          </div>
        </div>

        {/* Center Sections */}
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-semibold text-white">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © 2024 Shopmonkey Inc. All rights reserved. |
        <a href="#" className="ml-2 hover:underline">
          Privacy Policy
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
