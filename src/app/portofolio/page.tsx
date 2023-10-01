import Illustration from "public/illustration.jpg";
import Web from "public/web2.jpg";
import Android from "public/android.jpg";
import Image from "next/image";

const Portofolio = () => {
  return (
    <div>
      <h1 className="mb-1 mt-[80px] text-[70px] font-bold">Our Works</h1>
      <h4 className="mb-4 text-[20px] font-semibold">Choose a gallery</h4>
      <div className="flex gap-8">
        <figure className="relative">
          <Image
            src={Illustration}
            alt="Illustration"
            className="w-[200px] h-[250px] object-cover border-4 rounded"
          />

          <figcaption className="absolute bottom-2 right-3 text-[27px] font-bold">
            Illustration
          </figcaption>
        </figure>
        <figure className="relative">
          <Image
            src={Web}
            alt="website"
            className="w-[200px] h-[250px] object-cover border-4 rounded"
          />

          <figcaption className="absolute bottom-2 right-3 text-[27px] font-bold">
            Website
          </figcaption>
        </figure>

        <figure className="relative">
          <Image
            src={Android}
            alt="Illustration"
            className="w-[200px] h-[250px] object-cover border-4 rounded"
          />

          <figcaption className="absolute bottom-2 right-3 text-[27px] font-bold">
            Applications
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
export default Portofolio;
