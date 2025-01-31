const express=require('express')


const app=express();
require("dotenv").config();
const dbConfig=require("./config/dbConfig")
const portfolioRoute=require("./routes/portfolio-routes.js");
app.use(express.json());
app.use('/api/portfolio',portfolioRoute)
const port=process.env.PORT || 5001
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})


