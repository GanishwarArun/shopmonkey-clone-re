
import Image from "next/image";
// import paymentImage from "./public/payment-image.png"; 

export default function InvoiceSoftware(): JSX.Element {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white">
      {/* Left Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h4 className="text-blue-500 text-sm font-bold uppercase mb-2">
          Auto Repair Invoice Software
        </h4>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          The easy, integrated way to take payments.
        </h1>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="text-blue-500 text-xl font-bold mr-2">✓</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Professional Invoices
              </h3>
              <p className="text-gray-700">
                Get paid faster and impress your customers with Shopmonkey’s
                professional
                <a href="#" className="text-blue-500">
                  {" "}
                  quotes
                </a>{" "}
                and
                <a href="#" className="text-blue-500">
                  {" "}
                  invoices
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-blue-500 text-xl font-bold mr-2">✓</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Connect To QuickBooks
              </h3>
              <p className="text-gray-700">
                Import your shop’s customers, export sales and sync your
                inventory.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-blue-500 text-xl font-bold mr-2">✓</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Online & Contactless Payments
              </h3>
              <p className="text-gray-700">
                Whether in-person or online, give your auto repair customers
                <a href="#" className="text-blue-500">
                  {" "}
                  convenient ways to pay
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Request a Demo
        </button>
      </div>

      {/* Right Section */}
      <div className="mt-12 lg:mt-0 lg:ml-12">
        <Image
          src="/payment-image.png"
                  alt="Payment Process Image"
                  width={500}
            height={500}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}


