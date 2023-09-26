import links from "@/utils/links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex py-2.5 px-[50px] items-center justify-between">
      <div>PGPagi</div>
      <ul className="flex items-center gap-x-5 text-white">
        {links.map((link: any) => {
          return (
            <li key={link.id} className="hover:text-slate-500">
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
