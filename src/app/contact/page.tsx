import Image from "next/image";
import ContactImage from "public/contact.png";
const Contact = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center mb-8 mt-8 text-[50px] font-bold">
          Let's Keep in Touch
        </h1>
        <div className="flex">
          <div className="flex-1 ">
            <Image
              src={ContactImage}
              alt="contact-image"
              className="h-[90%] w-[90%] rounded animate-bounce duration-1000 "
            />
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-y-5">
              <div>
                <input
                  type="text"
                  className="text-xl border bg-transparent px-5 py-3 w-full rounded outline-none"
                  placeholder="name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="text-xl border bg-transparent px-5 py-3 w-full rounded outline-none"
                  placeholder="email"
                />
              </div>
              <div>
                <textarea
                  className="text-xl border bg-transparent px-5 py-3 w-full rounded h-[250px] outline-none"
                  placeholder="message"
                ></textarea>
              </div>
              <div>
                <button className="bg-green-500 px-10 py-3 rounded text-sm">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
