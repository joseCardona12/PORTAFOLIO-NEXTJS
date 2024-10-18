import { Express } from "express"
import sequelize from "../config/db"
export default class Util{
    static async startServer(PORT:number, app:Express):Promise< undefined | {message:string}>{
        try{
            await sequelize.authenticate();
            console.log({message: "Trying connect database"});
            await sequelize.sync();
            console.log({message: "Migrate model to database"})
            app.listen(PORT, ()=>console.log(`Server running on the port ${PORT}`))
        }catch(error:unknown){
            return ({message: "Error startServer"})
        }
    }
};