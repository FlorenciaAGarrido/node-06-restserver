require('dotenv').config();
const express = require('express')
const app = express()

const port = process.env.PORT || 3000; 

app.use(express.json());

app.get('/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Florencia',
        },
        {
            id: 2,
            name: 'Marta',
        },
    ]
    res.json(users);
});

app.post('/users', (req, res) => {

    const user = req.body;
    user.id = 868658; 

    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result);
});

app.put('/users/:id', (req, res) => {
    
    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User update',
        user
    }
    res.json(result);
});

app.patch('/users', (req, res) => {
    const result = {
        message: 'User update with patch'
    }
    res.json(result);
});

app.delete('/users/:id', (req, res) => {
    
    const { id } = req.params;
    const result = {
        message: `User with id:${id} deleted`
    }
    res.json(result);
});

app.listen(port, () => {
   console.log(`############### App started. Port: ${port} ###############`);  
});