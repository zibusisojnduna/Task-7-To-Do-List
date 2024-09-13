import React, {useState, useEffect} from "react";
import axios from "axios";
import { response } from "express";

function Overlay(){
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState()

    useEffect(() => {
        axios.get(`http//localhost:3001/todos`)
        .then(response => {
            setTodos(response.data.slice(0, 10))//Displays on the first 10
        })
        .catch(error => console.error("Error fetching todos.", error))
    }, [])

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            const todo = {
                userId:1,
                id:todos.length + 1,
                title:newTodo,
                completed:false
            }
            //Add new todo to the API
            axios.post(`http//localhost:3001/todos`, todo)
            .then( response => {
                setTodos([...todos, response.data])
                setNewTodo()
            })
            .catch(error => console.error("Error adding todo", error))
        }
    }
    const handleDeleteTodo = (id) => {
    //Delete todo from API
    axios.delete(`http//localhost:3001/todos/${id}`)
    .then(() => {
        setTodos(todos.filter(todo => todo.id !== id))
    })
    .catch(error => console.error("Error deleting todo", error))

    
}

return(
    <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add new todo"></input>
        <button onClick={handleAddTodo}>Add Todo</button>

        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.title}<button onClick={() => handleDeleteTodo(todo.id)}>Delete</button></li>
                
            ))}
        </ul>
    </div>

    
)
    
}


export default Overlay