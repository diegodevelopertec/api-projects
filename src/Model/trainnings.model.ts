import { sequelize } from "../Instances";
import { DataTypes, Model, Optional } from "sequelize";

interface TrainningAttributes extends Model {
    id: number,
    name: string,
    school:string,
    type:string,
    nivel:string,
    image?:string,
    state:string
   
  }


  export const TrainningsModel=sequelize.define<TrainningAttributes>('TrainningsModel',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nivel:{
        type:DataTypes.STRING
      },
      school: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
       
      }
  },{
    tableName:'trainnings',
    timestamps:false
  })