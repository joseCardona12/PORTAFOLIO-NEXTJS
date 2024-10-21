"use client";
import { IResponseProject } from "@/interfaces";
import "./inputSearchStyles.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { searchProjects } from "@/utils/searchProject";
import { useSearchProject } from "@/state-global/searchProjects";
import { useSearchProjectName } from "@/state-global/searchProjectName";


interface IInputSearchProps{
    projects: IResponseProject | null;
}

export default function InputSearch({projects}:IInputSearchProps): React.ReactNode {
    const [value,setValue] = useState<string>('');
    // const {setSearchProject} = useSearchProject((state)=>state);
    const {setSearchProjectName} = useSearchProjectName((state)=>state);

    const projectSearch = searchProjects(value, projects?.projects);

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setValue(e.target.value);
        setSearchProjectName(projectSearch?.name!);
        console.log(projectSearch);   
    }

    return (
        <div className="search-input">
            <input className="input" type="text" onChange={(e)=>handleSearch(e)} value={value} />
            <FaSearch className="icon" />
        </div>
    );
}