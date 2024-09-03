const express = require("express")
const bodyParser = require("body-parser")
const sqlie3 = require("sqlite3").verbose()
const cors = require("cors")

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors())

//Connect to database
const db = new sqlie3.Database("./users.db", (err) => {
if (err){
    console.log("Error opening database.", err.message)
}else {
    console.log("Connected to the database")
}
})

//Create
db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL )")

//endpoint
app.post("/SigUp", (res,req) => {
    const {name, email, password} = req.body
   const query = "INSERT INTO users(name, email, password) VALUES (?, ?, ?)"
    db.run(query, [name, email, password ], function (err){
        if (err){
            return res.status(400).json({error:err.message})
        }
    
    res.status(201).json({ id:this.lastID})
})

})
 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
