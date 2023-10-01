import Image from "next/image";
import Ilus1 from "public/ilus1.jpg";

const Illustration = () => {
  return (
    <div className="flex items-center gap-x-10">
      <div className="flex-1">
        <h2 className="text-[38px] font-semibold mb-3">Creative Portofolio</h2>
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In error quae
          maiores unde quos, nihil porro officia numquam labore aliquid nam
          totam. Repellat facilis in harum natus, modi adipisci itaque?
        </p>
        <button className="bg-green-500 p-[10px_15px] rounded font-md hover:bg-green-700 duration-1000">
          See More
        </button>
      </div>
      <div className="flex-1">
        <Image
          src={Ilus1}
          alt="Ilustration 1"
          className="w-[100%] h-[310px] object-cover rounded"
        />
      </div>
    </div>
  );
};
export default Illustration;
