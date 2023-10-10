import Image from "next/image";
import Dog from "public/dog.jpg";
import John from "public/john.jpg";
import { notFound } from "next/navigation";
async function getData(id: any) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }: any) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }: any) => {
  const data = await getData(params.id);
  return (
    <div className="h-[calc(100vh-100px)]">
      <div className="flex gap-x-2 mb-6">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-[33px] font-bold leading-[2.3rem] ">
            {data.title}
          </h1>
          <p className="leading-[1.2rem] ">{data.body}</p>
          <div className="flex items-center gap-x-2">
            <Image
              src={John}
              alt="author"
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={Dog}
            alt="dog"
            className="h-[280px] object-cover rounded-sm"
          />
        </div>
      </div>
      <div>
        <p className="leading-[1.2rem] text-justify mb-6">{data.desc}</p>
        <p className="leading-[1.2rem] text-justify mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          provident sit amet praesentium? Dolorem laudantium numquam possimus
          quo nam sed nulla deleniti, veritatis porro obcaecati omnis sapiente
          id aliquid nemo.
        </p>
        <p className="leading-[1.2rem] text-justify mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          provident sit amet praesentium? Dolorem laudantium numquam possimus
          quo nam sed nulla deleniti, veritatis porro obcaecati omnis sapiente
          id aliquid nemo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nemo, vero animi quod dolor veniam exercitationem nobis deserunt
          recusandae, fugiat facilis minima mollitia ullam laborum voluptas
          facere voluptatem ab repellendus odio! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quaerat provident sit amet praesentium?
          Dolorem laudantium numquam possimus quo nam sed nulla deleniti,
          veritatis porro obcaecati omnis sapiente id aliquid nemo. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};
export default BlogPost;
