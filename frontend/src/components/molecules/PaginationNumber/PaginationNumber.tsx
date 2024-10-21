import "./paginationNumberStyles.css"

export default function PaginationNumber():React.ReactNode{
    const quantityPangination: number[] = [1,2,3,4,5]
    return(
        <div className="pagination-number">
            {quantityPangination.map((item:number)=>(
                <div className="pagination-number-item" key={item}>
                    {item}
                </div>
            ))}
        </div>
    )
}