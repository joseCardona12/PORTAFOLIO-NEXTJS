import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import ProjectModel from "./projectModel";
import TechnologieModel from "./technologieModel";

@Table({
    tableName: "project_technologies",
    timestamps: false
})
export default class ProjectTechnologieModel extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
    })
    id!:number;

    @ForeignKey(()=>ProjectModel)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    project_id!: number;

    @ForeignKey(()=>TechnologieModel)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    technology_id!: number;
}