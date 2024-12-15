"use client";

interface WorkflowItem {
  title: string;
  description: string;
}

const workflowItems: WorkflowItem[] = [
  {
    title: "Streamline Your Workflow",
    description:
      "Simplify job creation, estimates generation, POs management, VIN lookup, parts ordering, and more.",
  },
  {
    title: "Manage Everything In One Place",
    description:
      "Manage every aspect of your auto repair shop in a single tool, including technician tasks, parts ordering, customer management and more.",
  },
  {
    title: "Gain Valuable Insights",
    description:
      "Boost profitability and learn about your shop’s performance with easy-to-understand visual dashboards and reporting tools.",
  },
];

export default function AutoRepairSoftware(): JSX.Element {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="relative">
          <img
            src="/auto-repair.png"
            alt="Automotive Repair"
            className="rounded-lg shadow-lg"
          />
          {/* <div className="absolute -bottom-8 -left-8 bg-white shadow-lg rounded-lg p-4 w-64"> */}
            {/* <h3 className="text-blue-600 font-semibold mb-2">Workflow</h3> */}
            {/* <ul className="space-y-2"> */}
              {/* <li className="flex items-center justify-between">
                <span>#1577 Water Pump</span>
                <span className="font-semibold">$4,302.56</span>
              </li> */}
              
            {/* </ul> */}
          {/* </div> */}
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-sm uppercase text-blue-600 font-semibold mb-4">
            Automotive Repair Software
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Easily manage everything for your auto repair shop.
          </h1>
          <ul className="space-y-6 text-black">
            {workflowItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full p-2 mr-4">
                  ✔
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
