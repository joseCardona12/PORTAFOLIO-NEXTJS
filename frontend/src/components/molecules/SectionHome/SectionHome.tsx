"use client";
import "./sectionStyles.css";
import { IComment, IResponseHomeView } from "@/interfaces";
import { Button, ButtonIcon } from "@/components/atoms";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/state-global/darkMode";

interface ISectionHomeProps {
  homeViewData: IResponseHomeView;
}
export default function SectionHome({ homeViewData }: ISectionHomeProps) {
  const router = useRouter();
  const darkMode = useDarkMode((state) => state.darkMode);

  if(!homeViewData || homeViewData.message !== "correct getHomeViewService") return null;
  const titleSeparate: string[] = homeViewData.homeView.title.split("-");
  const descripionSeparate: string[] =
    homeViewData.homeView.description.split(".");

  const [creativeMode, setCreativeMode] = useState<boolean>(false);
  const commentData: IComment[] = [
    { name: "illustrator", icon: <SiAdobeillustrator /> },
    { name: "photoshop", icon: <SiAdobephotoshop /> },
    { name: "adobeXD", icon: <SiAdobexd /> },
    { name: "indesign", icon: <SiAdobeindesign /> },
    { name: "premierPro", icon: <SiAdobepremierepro /> },
    { name: "afterEffects", icon: <SiAdobeaftereffects /> },
    { name: "basicOffice", icon: <TiVendorMicrosoft /> },
    { name: "html", icon: <FaHtml5 /> },
    { name: "css", icon: <FaCss3Alt /> },
    { name: "js", icon: <IoLogoJavascript /> },
    { name: "ts", icon: <SiTypescript /> },
    { name: "react", icon: <RiReactjsLine /> },
    { name: "mySQL", icon: <SiMysql /> },
    { name: "node", icon: <IoLogoNodejs /> },
  ];
  const handleClickRedirect = (): void => {
    router.push("/about");
  };

  const handleClickCreativeMode = (): void => {
    setCreativeMode(!creativeMode);
  };
  return (
    <section className={darkMode ? "dark-mode" : "section-home"}>
      <div className="home-left">
        <h5>{homeViewData.homeView.titleSmall}</h5>
        <h2>
          <span className="left-title-first">{titleSeparate[0]}</span> -
          <br />
          {titleSeparate[1]}
        </h2>
        <p>
          {descripionSeparate[0]} <br /> {descripionSeparate[1]} <br />{" "}
          {descripionSeparate[2]} <br /> {descripionSeparate[3]}
        </p>
        <Button text="View projects" onClick={handleClickRedirect} />
      </div>
      <div className="home-right">
        <div className="right-image">
          <img
            src={
              homeViewData.homeView.urlImage
                ? homeViewData.homeView.urlImage
                : "images/me.png"
            }
            alt="image about me"
          />
        </div>
        {commentData.map((item: IComment, index: number) => (
          <div key={index} className={`comment comment-${item.name}`}>
            {item.icon}
          </div>
        ))}
      </div>
      <ButtonIcon
        icon={<MdEdit />}
        text="Creative mode"
        onClick={handleClickCreativeMode}
      />
    </section>
  );
}