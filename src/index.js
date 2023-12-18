import dotenv from "dotenv";
import connectDB  from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path:'./env'
})
connectDB()

.then(()=>{
    
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`process is running on ${process.env.PORT}`)
    })
    app.on((error)=>{
        console.log(`errpr${error}`)
    })
})
.catch((er)=>{
        console.log(`error is ${er}`)
})