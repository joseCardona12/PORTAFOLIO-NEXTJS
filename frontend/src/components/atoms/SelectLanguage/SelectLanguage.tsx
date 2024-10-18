"use client";
import { ChangeEvent } from "react";

interface ISelectLanguageProps {
  options: string[];
}
export default function SelectLanguage({
  options,
}: ISelectLanguageProps): React.ReactNode {
  const handleSelectLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    console.log(e.target.value);
  };
  return (
    <select
      name="selectLanguage"
      id="selectLanguage"
      title="language"
      onChange={(e) => handleSelectLanguage(e)}
    >
      {options.map((item: string, index: number) => (
        <option key={index} value={item === "spanish" ? "es" : "en"}>
          {item}
        </option>
      ))}
    </select>
  );
}
