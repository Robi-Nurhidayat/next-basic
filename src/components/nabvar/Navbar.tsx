import links from "@/utils/links";
import Link from "next/link";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <div className="flex box-border h-[50px]  items-center justify-between">
      <div>
        <Link href={"/"}>PGPagi</Link>
      </div>
      <ul className="flex items-center gap-x-5 text-white">
        <DarkMode />
        {links.map((link: any) => {
          return (
            <li
              key={link.id}
              className="hover:text-slate-500 text-lg font-semibold"
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
