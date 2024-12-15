import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-6 py-12 md:py-24">
        {/* Header Section */}
        <header className="text-center md:text-left">
          <p className="text-sm uppercase text-gray-300 tracking-wide">
            Auto Repair Software
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            The #1 software for
            <br />
            auto service shops.
          </h1>
          <p className="text-lg text-gray-400 mt-6">
                      Turbocharge your shop with the industry-leading auto repair software.
            <br />          Shopmonkey has everything you need to manage and grow your shop in one place.
          </p>
          <div className="mt-8">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Request a Demo
            </button>
          </div>
        </header>

        {/* Image Section */}
        <div className="relative mt-12 md:mt-0 md:absolute md:right-0 md:top-0">
          <Image
            src="/shop monkey mechanic.png" // Replace with the actual image path
            alt="Mechanic Working"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
