import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section id="Hero" className="flex justify-between bg-[#ffeefb] text-gray-950  m-10 ring-4 shadow-xl shadow-indigo-500/40">
      {/* Left Section */}
      <div className=" justify-center text-center font-bold  font-serif text-4xl">
        <div className="m-12 my-20">
          <Image src="/comma1.webp" alt="commas" width={60} height={60} />
          <div className="p-10">
            <p>Explore the Boundaries of the Infinite.</p>
            <p>
              Unlock the mysteries of the universe, one discovery at a 
              time.
            </p>
          </div>
          <Image
            className=" flex ml-auto"
            src="/comma2.webp"
            alt="commas"
            width={60}
            height={60}
          />
        </div>
      </div>
      {/* Right Section */}
      <div className="m-12 my-20  rounded-sm p-3 ring-4 ring-[#665a4f]	shadow-xl shadow-[#000] hover:shadow-[#c58bf5] hover:ring-[#a245f8] ">
        <Image src="/image.webp" alt="earth" width={600} height={600} />
      </div>
    </section>
  );
}

export default Hero;
