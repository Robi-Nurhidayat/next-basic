import Image from "next/image";
import Dog from "public/dog.jpg";
import John from "public/john.jpg";
const BlogPost = () => {
  return (
    <div>
      <div className="flex gap-x-2 mb-6">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-[33px] font-bold leading-[2.3rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="leading-[1.2rem] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, nisi,
            doloremque dolores accusantium, assumenda voluptatum ipsam
            aspernatur itaque earum laborum possimus perferendis laboriosam.
            Aliquid, vitae maxime amet rerum commodi voluptatibus?
          </p>
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
        <p className="leading-[1.2rem] text-justify mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          provident sit amet praesentium? Dolorem laudantium numquam possimus
          quo nam sed nulla deleniti, veritatis porro obcaecati omnis sapiente
          id aliquid nemo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nemo, vero animi quod dolor veniam exercitationem nobis deserunt
          recusandae, fugiat facilis minima mollitia ullam laborum voluptas
          facere voluptatem ab repellendus odio!
        </p>
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
