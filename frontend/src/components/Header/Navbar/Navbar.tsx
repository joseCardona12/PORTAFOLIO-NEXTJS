import Link from "next/link";
import "./navbarStyles.css";
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";

interface INavbarData {
  name: string;
  url: string;
  icon: React.ReactElement;
}
export default function Navba(): React.ReactNode {
  const navbarData: INavbarData[] = [
    { name: "Home", url: "/", icon: <IoHomeSharp /> },
    { name: "About", url: "/about", icon: <FaUser /> },
    { name: "Projects", url: "/projects", icon: <FaBox /> },
    { name: "Contact", url: "/contact", icon: <MdContacts /> },
  ];
  return (
    <div className="nav-menu">
      {navbarData.length > 0 ? (
        navbarData.map((item: INavbarData) => (
          <Link
            href={item.url}
            key={item.name}
            className="item"
            style={{
              textDecoration: "none",
              color: "var(--paragraph-color)",
            }}
          >
            <span>
              {item.icon}
              {item.name}
            </span>
          </Link>
        ))
      ) : (
        <p>There are not data menu...</p>
      )}
    </div>
  );
}
