import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-[auto] h-[50px] box-border flex justify-between items-center">
      <div className="">2023 Robi Nurhidayat, All rights reserved</div>
      <div className="flex gap-x-2">
        <Image src="/facebook.png" width={30} height={30} alt="icon facebook" />
        <Image
          src="/instagram.png"
          width={30}
          height={30}
          alt="icon instagram"
        />
        <Image src="/twitter.png" width={30} height={30} alt="icon twitter" />
        <Image src="/whatsapp.png" width={30} height={30} alt="icon whatsapp" />
      </div>
    </div>
  );
};
export default Footer;
