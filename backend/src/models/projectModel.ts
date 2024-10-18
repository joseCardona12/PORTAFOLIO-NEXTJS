import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import ProjectTechnologieModel from "./projectTechnologieModel";

@Table({
  tableName: "projects",
  timestamps: false,
})
export default class ProjectModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  description!: string;
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  url_repository!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  url_deploy!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  url_image!: string;

  @HasMany(() => ProjectTechnologieModel)
  projectTechnologies!: ProjectTechnologieModel[];
}
