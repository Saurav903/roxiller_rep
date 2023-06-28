const express = require("express");

const cors = require("cors");
const { connection } = require("./config/db");
const { initializeRouter } = require("./routes/initailize.route");

require("dotenv").config();

const app = express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/initial",initializeRouter);

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connection to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`server is running at port ${process.env.port}`);
})