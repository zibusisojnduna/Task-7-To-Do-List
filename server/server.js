const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("better-sqlite3")("database.db")
const app = express()
const port = 3001
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

//Create users
const createTable = () => {
    const sql = "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)"
    db.prepare(sql).run()
}

createTable()

//Create todos
// const createTodos = () => {
//     const sql = "CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, priority TEXT NOT NULL, progress TEXT NOT NULL)"
//     db.prepare(sql).run()
// }

// createTodos()

//Insert User

app.post("/users", (req, res) => {
    const {name, email, password} = req.body
    const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)"
    const info = db.prepare(sql).run(name, email, password)
    res.status(201).json({id: info.lastInsertRowid})
})

//Insert Todo
app.post("/todos", (req, res) => {
    const {name, priority, progress} = req.body
    const sql = "INSERT INTO todo (name, priority, progress) VALUES (?, ?, ?)"
    const info = db.prepare(sql).run(name, priority, progress)
    res.status(201).json({id: info.lastInsertRowid})
})


//Get all users
app.get("/users", (req, res) => {
    const sql ="SELECT * FROM user"
    const rows = db.prepare(sql).all()
    res.json(rows)
})

//Get all todos
app.get("/todos", (req, res) => {
    const sql = "SELECT * FROM todo"
    const rows = db.prepare(sql).all()
    res.json(rows)
})

//Get a user by id
app.get("/users/:id", (req, res) => {
    const { id } = req.params
    const sql = "SELECT * FROM user WHERE id = ?"
    const row = db.prepare(sql).get(id)
    if(row) {
        res.json(row)
    } else {
        res.status(404).json({error: "User not found"})
    }
})

//Get a todo by id
app.get("/todos/:id", (req, res) => {
    const { id } = req.params
    const sql = "SELECT * FROM todo WHERE id = ?"
    const row = db.prepare(sql).get(id)
    if (row) {
        res.json(row)
    } else {
        res.status(404).json({error: "Todo not found"})
    }
})
 

//Update a user by id
app.put("/users/:id", (req, res) => {
const { id } = req.params
const {name, email, password} = req.body
const sql = "UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?"
const info = db.prepare(sql).run(name, email, password, id)
if (info.changes > 0) {
    res.json({message: "User updated sucessfully."})
} else {
    res.status(404).json({error: "User not found"})
}
})

//Update a todo by id
app.put("/todos/:id", (req, res) => {
const { id } = req.params
const {name, priority, progress} = req.body
const sql = "UPDATE todo SET name = ?, priority = ?, progress = ? WHERE id = ?"
const info = db.prepare(sql).run(name, priority, progress, id)
if (info.changes > 0) {
    res.json({message: "Todo updated successfully"})
} else {
    res.status(404).json({error: "Todo not found"})
}
})

//Delete a user by id
app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    const sql = "DELETE FROM user WHERE id = ?"
    const info = db.prepare(sql).run(id)
    if (info.changes > 0) {
        res.json({message: "User deleted successfully"})
    } else{
        res.status(404).json({error: "User not found"})
    }
    }
)

//Delete a todo by id
app.delete("/todos/:id", (req, res) => {
    const { id } = req.params
    const sql = "DELETE FROM todo WHERE id = ?"
    const info = db.prepare(sql).run(id)
    if (info.changes > 0) {
        res.json({message: "Todo deleted seccessfully"})
    } else {
        res.status(404).json({error: "Todo not found"})
    }
})

//Signup  route
// app.post("/signup", (req,res) => {
//     const {name, email, password} = req.body

//     const salt = bcrypt.genSaltSync(10)
//     const hashedPassword = bcrypt.hashedSync (password, salt)

//     db.run("INSERT INTO user (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword], function (err) {
//         if (err){
//             return res.status(400).json({message: "Error registering user"})
//         }
//         res.status(201).json({message: "User registerd sucessfully"})
//     })
// })


//Login
// app.post("/login", (req, res) => {
//     const {name, password} = req.body

//     db.get("SELECT * FROM user WHERE name = ?", [name], (err, user) => {
//         if (err) {
//             return res.status(500).json({message:"Database error"})
//         }
//         if(!user){
//             return res.status(400).json({message: "Invalid username or password"})
//         }
//     bcrypt.compare(password, user.password, (err, isMatch) => {
//         if (err) {
//             return res.status(500).json({message: "Error comparring password"})
//         }
//         if (!isMatch) {
//             return res.status(400).json({message: "Invalid username or password"})
//         }
      
//     })
//     })
// })

app.listen(port, () => {
    console.log(`Server running at http://localhost:3001`)
})
