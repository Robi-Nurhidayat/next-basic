import Image from "next/image";
import Dog from "public/dog.jpg";

const Blog = () => {
  return (
    <div className="pt-4 flex flex-col gap-y-8">
      <div className="flex items-center gap-x-10">
        <div className="h-[200px]">
          <Image
            src={Dog}
            alt="dog"
            className="h-full object-cover rounded-sm w-[800px]"
          />
        </div>
        <div>
          <h1 className="text-[28px] font-semibold leading-[2.3rem] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="leading-[1.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            amet debitis cumque a aut minus, molestias, tempora tempore adipisci
            vitae culpa similique maxime! Consequuntur iste commodi quasi.
            Recusandae, minus accusamus?
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-10">
        <div className="h-[200px]">
          <Image
            src={Dog}
            alt="dog"
            className="h-full object-cover rounded-sm w-[800px]"
          />
        </div>
        <div>
          <h1 className="text-[28px] font-semibold leading-[2.3rem] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="leading-[1.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            amet debitis cumque a aut minus, molestias, tempora tempore adipisci
            vitae culpa similique maxime! Consequuntur iste commodi quasi.
            Recusandae, minus accusamus?
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-10">
        <div className="h-[200px]">
          <Image
            src={Dog}
            alt="dog"
            className="h-full object-cover rounded-sm w-[800px]"
          />
        </div>
        <div>
          <h1 className="text-[28px] font-semibold leading-[2.3rem] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="leading-[1.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            amet debitis cumque a aut minus, molestias, tempora tempore adipisci
            vitae culpa similique maxime! Consequuntur iste commodi quasi.
            Recusandae, minus accusamus?
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-10">
        <div className="h-[200px]">
          <Image
            src={Dog}
            alt="dog"
            className="h-full object-cover rounded-sm w-[800px]"
          />
        </div>
        <div>
          <h1 className="text-[28px] font-semibold leading-[2.3rem] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="leading-[1.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            amet debitis cumque a aut minus, molestias, tempora tempore adipisci
            vitae culpa similique maxime! Consequuntur iste commodi quasi.
            Recusandae, minus accusamus?
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blog;
