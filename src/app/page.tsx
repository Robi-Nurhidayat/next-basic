import Image from "next/image";
import Link from "next/link";
import Hero from "public/hero.png";
const Home = () => {
  return (
    <div className="flex  h-[calc(100vh-100px)] items-center justify-between">
      <div className=" flex-1">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#98EECC] to-[#DEF5E5] text-[50px] w-[70%]  leading-[60px] font-bold mb-8">
          Better design for your digital products.
        </h1>
        <p className="text-xl mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
        <Link
          href={"/portofolio"}
          className="bg-green-600 font-semibold p-4 text-white rounded hover:bg-green-700 duration-200"
        >
          See Our Works
        </Link>
      </div>
      <div className=" flex-1 flex justify-end">
        <Image src={Hero} alt="Hero Image" className="w-[90%]" />
      </div>
    </div>
  );
};
export default Home;
