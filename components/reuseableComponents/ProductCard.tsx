import { CardProps } from "@/types/components";
import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<CardProps> = ({ image, heading, price, id }) => {
  return (
    <div
      key={id}
      className="relative w-[163px] h-[288px] xs:w-[250px] sm:w-[305px] xs:h-[375px] flex flex-col gap-[10px] group product-card"
    >
      <Image
        src={`/images/${image}.png`}
        alt={image}
        width={200}
        height={200}
        className="w-[163px] h-[201px] xs:w-[305px] sm:w-[305px] xs:h-[375px] sm:h-[375px] img"
      />

      <div className="flex flex-col gap-[8px]">
        <h4 className="font-clash font-normal leading-7 text-darkPrimary xs:text-xl sm:text-xl text-[1rem]">
          {heading}
        </h4>
        <p className="font-satoshi font-normal leading-[27px] text-darkPrimary xs:text-xl  sm:text-xl">
        &#163;{price}
        </p>
      </div>

      {/* Add to Cart button */}
      <button className="w-[162px] xs:w-[250px] sm:w-[304px] rounded relative bottom-[7.68rem] md:bottom-[9rem] left-1/2 transform -translate-x-1/2 px-4 md:px-8  py-2 md:py-4 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <Link href={`/products/id${id}`} className="text-sm md:text-xl">
          Add to Cart
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;
