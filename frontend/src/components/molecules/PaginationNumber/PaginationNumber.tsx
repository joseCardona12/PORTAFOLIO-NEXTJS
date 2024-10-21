"use client";
import { getProjectByPaginationService } from "@/services";
import "./paginationNumberStyles.css";
import { useProjectsPagination } from "@/state-global/projectPagination";

export default function PaginationNumber():React.ReactNode{
    const quantityPangination: number[] = [1,2,3,4,5];
    const {setProjects} = useProjectsPagination((state)=>state);
    
    const handleClick = async(index:number) =>{
        const projectByPage = await getProjectByPaginationService(index);
        console.log("projectPage", projectByPage)
        if(!projectByPage) return;
        setProjects(projectByPage);
    }
    return(
        <div className="pagination-number">
            {quantityPangination.map((item:number)=>(
                <div className="pagination-number-item" key={item} onClick={()=>handleClick(item)}>
                    {item}
                </div>
            ))}
        </div>
    )
}