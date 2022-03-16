const express = require("express")
const app = express()
const path = require ("path")
const port = 3030

//middlewares
app.use(express.static("public"))

//routs
app.get("/" , (req,res) => res.sendFile(path.join(__dirname , "/views/home.html")))






//server
app.listen(port , () => console.log(`Server running in port http://localhost:${port}`))