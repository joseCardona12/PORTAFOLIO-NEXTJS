"use client";
import { IResponseProject } from "@/interfaces";
import "./inputSearchStyles.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { searchProjects } from "@/utils/searchProject";
import { useSearchProject } from "@/state-global/searchProjects";


interface IInputSearchProps{
    projects: IResponseProject | null;
}

export default function InputSearch({projects}:IInputSearchProps): React.ReactNode {
    const [value,setValue] = useState<string>('');
    const {setSearchProject} = useSearchProject((state)=>state);

    const projectSearch = searchProjects(value, projects?.projects);
    if(!projectSearch)return null;
    console.log("search", projectSearch);
    // setSearchProject(projectSearch);

    return (
        <div className="search-input">
            <input className="input" type="text" onChange={(e)=>setValue(e.target.value)} />
            <FaSearch className="icon" />
        </div>
    );
}