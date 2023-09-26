import links from "@/utils/links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex py-2.5 px-[50px] bg-blue-500 items-center justify-between">
      <div>Logo</div>
      <ul className="flex items-center gap-x-5 text-white">
        {links.map((link: any) => {
          return (
            <li key={link.id}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
