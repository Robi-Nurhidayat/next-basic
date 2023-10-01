import Application from "@/components/portofolio/Application";
import Illustration from "@/components/portofolio/Illustration";
import Website from "@/components/portofolio/Website";

const Category = ({ params }: any) => {
  return (
    <div>
      <h1 className="capitalize text-green-500 text-[25px] mb-4 font-semibold">
        {params.category}
      </h1>
      <div>
        {params.category === "illustration" && <Illustration />}
        {params.category === "website" && <Website />}
        {params.category === "application" && <Application />}
      </div>
    </div>
  );
};
export default Category;
