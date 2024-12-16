import Features from "@/components/heroSection/Features";
import GetInTouch from "@/components/heroSection/GetInTouch";
import Hero from "@/components/heroSection/Hero";
import Listing from "@/components/heroSection/Listing";
import PopularProducts from "@/components/heroSection/PopularProducts";
import SignUp from "@/components/heroSection/SignUp";

export default function Home() {
  return (
    <div className="relative mx-auto w-full sm:w-[390px] sm:h-[4500px] bg-white md:w-full lg:w-[1440px] xl:h-[4160px]">
      <Hero />
      <Features />
      <Listing />
      <PopularProducts />
      <SignUp />
      <GetInTouch />
    </div>
  );
}
