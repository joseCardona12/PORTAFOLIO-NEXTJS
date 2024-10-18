import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import ProjectTechnologieModel from "./projectTechnologieModel";

@Table({
    tableName: "technologies",
    timestamps: false
})
export default class TechnologieModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!:number;

    @Column({
        type:DataType.STRING(200),
        allowNull:false
    })
    name!:string;

    @HasMany(()=>ProjectTechnologieModel)
    projectTechnologies!:ProjectTechnologieModel[]
}