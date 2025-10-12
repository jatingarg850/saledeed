import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden font-serif">
      {/* Background Image */}
      <Image
        src="/herosection-background.png" 
        alt="Office interior background"
        fill
        style={{ objectFit: 'cover' }}
        quality={90}
        priority
        className="z-0"
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#1B2951]/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 text-white px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-serif text-[#FFFFFF] mb-4">
          Verify - Draft - Register
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-4xl font-serif text-[#C4963A] mb-4">
          All Property Documents Hassle Free
        </p>

        {/* Document Types */}
        <p className="text-lg md:text-xl text-gray-300 mb-4 tracking-wide">
          Sale Deed | Gift Deed | Relinquishment Deed | Valuation Report | NOC & More
        </p>
        
        {/* Commission Line */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 tracking-wide">
          Buy/Sell/Rent at minimum commission
        </p>

        {/* Four Placeholder Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-[#EFEFEF]/40 border border-white/20 backdrop-blur-sm rounded-lg h-32 shadow-lg"
            >
              {/* Content for cards can go here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;