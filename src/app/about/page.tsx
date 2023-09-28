import Image from 'next/image';
import Bg from 'public/bg-about.jpg'

const About = () => {
  return(
    <div>
      <div className='relative'>
        <Image src={Bg} alt='bg-about' className='h-[25vh] object-cover' />
        <div className='bg-green-500 w-[max-content] px-2 rounded-sm absolute z-10 bottom-[20px] left-5'>
          <h1 className="text-2xl font-bold">Digital Storytellers</h1>
          <p className="text-lg font-semibold">Handcrafting award winning digital experiences</p>
        </div>
      </div>
      <div>
        <div>
          <h2>Who Are We ?</h2>
        </div>
        <div>
          <h2>What We Do ?</h2>
        </div>
      </div>
    </div>
  )
};
export default About;
