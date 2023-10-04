import Image from "next/image";
import Bg from "public/bg-about.jpg";

const About = () => {
  return (
    <div className="h-[calc(100vh-100px)]">
      <div className="relative mb-8">
        <Image
          src={Bg}
          alt="bg-about"
          className="h-[25vh] object-cover grayscale"
        />
        <div className="bg-green-500 w-[max-content] px-2 rounded-sm absolute z-10 bottom-[20px] left-5">
          <h1 className="text-2xl font-bold">Digital Storytellers</h1>
          <p className="text-md font-semibold -mt-1">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>
      <div className="flex gap-x-[75px]">
        <div className="flex-1">
          <h2 className="text-[25px] font-semibold mb-4">Who Are We ?</h2>
          <p className="mb-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
            eos ut qui iusto eum fugiat? Pariatur, aperiam suscipit.
          </p>
          <p className="mb-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur tempore, perferendis voluptate magni odit modi earum et
            itaque delectus commodi sapiente harum sed debitis necessitatibus
            sequi natus ab doloremque in.
          </p>
          <p className="mb-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur tempore, perferendis voluptate magni odit modi earum et
            itaque delectus commodi sapiente harum sed.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-[25px] font-semibold mb-4">What We Do ?</h2>
          <p className="mb-3 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            sint, ipsa eveniet expedita dolore voluptate nobis, voluptas
            excepturi alias quidem facere, tenetur modi maiores omnis doloremque
            hic! Nobis, possimus. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </p>

          <div className="flex flex-col gap-y-3 text-sm mb-3">
            <span>- Creative Illustrations</span>
            <span>- Dynamic Websites</span>
            <span>- Fast And Handy Mobile Apps</span>
          </div>

          <button className="bg-green-500 p-[10px_15px] rounded font-md hover:bg-green-700 duration-1000">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
