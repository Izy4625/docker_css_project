import cors from "cors";
import express from "express"
import dotenv from "dotenv";
import router from "./routes/form";

import connectToMongo from "./config/db"
dotenv.config()

const PORT = process.env.PORT ||3000;

export const app = express();
connectToMongo();
app.use(express.json())
app.use(cors());
app.use("/api/idfForm",router);

app.listen(PORT,()=>{
    console.log(`Server started, Visit "http://localhost:${PORT}"`)
})

