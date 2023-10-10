import Image from "next/image";
import Link from "next/link";
import Dog from "public/dog.jpg";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="pt-4 flex flex-col gap-y-8">
      {data.map((val: any) => {
        return (
          <Link href={`/blog/${val._id}`} key={data.id}>
            <div className="flex items-center gap-x-10">
              <div className="h-[200px] flex-[0_0_30%]">
                <Image
                  src={Dog}
                  alt="dog"
                  className="h-full object-cover rounded-sm w-[800px]"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-[28px] font-semibold leading-[2.3rem] mb-3">
                  {val.title}
                </h1>
                <p className="leading-[1.2rem]">{val.body}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Blog;
