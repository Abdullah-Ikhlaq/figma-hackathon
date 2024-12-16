import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="relative w-[390px] h-[385px] py-[32px] px-[24px] my-[3rem] flex flex-col lg:flex-row lg:w-[1340px] md:w-[890px] lg:h-[277px] lg:px-[12rem] lg:py-[2rem] lg:gap-[8rem] md:justify-center md:items-center lg:justify-normal lg:items-start">
      <h2 className="font-clash font-normal leading-[44.8px] text-darkPrimary text-3xl lg:w-[704px] md:w-[520px] ">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </h2>

      <button className="w-full md:relative lg:right-0 md:right-16 mt-[4rem] md:mt-4 lg:mt-2 md:w-[250px] md:h-[56px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] leading-6 text-darkPrimary font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out">
        <Link href="/products">View our products</Link>
      </button>
    </div>
  );
};

export default AboutSection;
