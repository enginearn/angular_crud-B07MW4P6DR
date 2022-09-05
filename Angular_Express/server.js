const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let todos = [];
let nextId = 1;

app.get('/api/todos', (req, res) => {
    res.status(200).json({
        count: todos.length,

        todos: todos
    });
});

app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: nextId++,
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(200).json({
        message: 'Todo added successfully',
        createdTodo: newTodo
    });
});

app.delete('/api/todos/:id', (req,res) => {
    todos = todos.filter((todo) => todo.id !== Number(req.params.id));
    res.status(200).json({
        message: 'Todo deleted successfully'
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
