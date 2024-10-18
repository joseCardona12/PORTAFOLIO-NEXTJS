import { IContact } from "@/interfaces";
import "./contactStyles.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Contact(): React.ReactNode {
  const contactData: IContact[] = [
    {
      name: "github",
      url: "https://github.com/joseCardona12",
      icon: <FaGithub />,
    },
    { name: "instagram", url: "/", icon: <AiFillInstagram /> },
    { name: "linkedin", url: "/", icon: <FaLinkedin /> },
    {
      name: "whatsApp",
      url: "https://wa.me/3006233410",
      icon: <IoLogoWhatsapp />,
    },
  ];
  return (
    <div className="content-contact">
      {contactData.map((item: IContact, index: number) => (
        <Link
          href={item.url}
          className={`contact-item contact-${item.name}`}
          key={index}
          target="_blank"
        >
          <span>{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
