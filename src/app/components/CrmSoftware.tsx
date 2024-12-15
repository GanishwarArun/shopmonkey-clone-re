import Image from "next/image";
// import crmImage from "../public/crm-image.png"; // Ensure you add this image to your public folder


export default function CrmSoftware(): JSX.Element {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white">
      {/* Left Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h4 className="text-blue-500 text-sm font-bold uppercase mb-2">
          Auto Repair CRM Software
        </h4>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
          Offer your auto repair customers a superior experience.
        </h1>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="text-blue-500 text-xl font-bold mr-2">✓</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Stay Connected
              </h3>
              <p className="text-gray-700">
                Communicate with customers from within Shopmonkey to
                <a href="#" className="text-blue-500">
                  {" "}
                  send estimates
                </a>
                , updates, answer questions, and more.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-blue-500 text-xl font-bold mr-2">✓</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Drive Customer Trust With Transparency
              </h3>
              <p className="text-gray-700">
                Easily capture and share vehicle photos and videos from a
                smartphone or tablet using our
                <a href="#" className="text-blue-500">
                  {" "}
                  auto repair app
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-blue-500 text-xl font-bold mr-2">✓</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Simplify Appointment Scheduling
              </h3>
              <p className="text-gray-700">
                Offer your auto repair shop customers convenience and
                flexibility with simple appointment scheduling and automated
                reminders.
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
          src="/crm-image.png"
          alt="CRM Software Illustration"
          width={500}
          height={500}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
