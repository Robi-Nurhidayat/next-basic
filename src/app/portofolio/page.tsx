import Illustration from "public/illustration.jpg";
import Web from "public/web2.jpg";
import Android from "public/android.jpg";
import Image from "next/image";
import Link from "next/link";

const Portofolio = () => {
  return (
    <div className="">
      <h4 className="mb-4 text-[20px] font-semibold ">Choose a gallery</h4>
      <div className="flex gap-8">
        <Link
          href={"/portofolio/illustration"}
          className="hover:text-cyan-700 duration-200"
        >
          <figure className="relative">
            <Image
              src={Illustration}
              alt="Illustration"
              className="w-[200px] h-[250px] object-cover border-4 rounded"
              priority={true}
            />

            <figcaption className="absolute bottom-2 right-3 text-[27px] font-bold">
              Illustration
            </figcaption>
          </figure>
        </Link>
        <Link
          href={"/portofolio/website"}
          className="hover:text-cyan-700 duration-200"
        >
          <figure className="relative">
            <Image
              src={Web}
              alt="website"
              className="w-[200px] h-[250px] object-cover border-4 rounded"
              priority={true}
            />

            <figcaption className="absolute bottom-2 right-3 text-[27px] font-bold">
              Website
            </figcaption>
          </figure>
        </Link>
        <Link
          href={"/portofolio/application"}
          className="hover:text-cyan-700 duration-200"
        >
          <figure className="relative">
            <Image
              src={Android}
              alt="Illustration"
              className="w-[200px] h-[250px] object-cover border-4 rounded"
              priority={true}
            />

            <figcaption className="absolute bottom-2 right-3 text-[27px] font-bold">
              Applications
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
};
export default Portofolio;
