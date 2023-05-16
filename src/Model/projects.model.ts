import { sequelize } from "../Instances";
import { DataTypes, Model, Optional } from "sequelize";

interface ProjectsAttributes extends Model {
    id: number,
    name: string,
    imageVideo:string,
    description:string,
    tecs:string,
    urldeploy:string,
    repository:string
   
   
  }


  export const ProjectsModel=sequelize.define<ProjectsAttributes>('ProjectsModel',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tecs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      imageVideo: {
        type: DataTypes.STRING,
        allowNull:false,
       
      },
      urldeploy:{
        type: DataTypes.STRING,
        allowNull:false,
       
      },
      repository:{
        type: DataTypes.STRING,
        allowNull:false,
       
      }
  },{
    tableName:'projects',
    timestamps:false
  })