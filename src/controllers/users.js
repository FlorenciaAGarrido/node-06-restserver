const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUsers = (req, res) => {
    
    throw new Error("Error de testeo de handler");
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
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = (req, res) => {

    const user = req.body;
    user.id = 868658; 

    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req, res) => {
    
    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User update',
        user
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePartialUser = (req, res) => {
    const result = {
        message: 'User update with patch'
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res) => {
    
    const { id } = req.params;
    //const id = req.params.id;
    const result = {
        message: `User with id:${id} deleted`
    }
    res.json(result);
};

module.exports = {
     getAllUsers,
     createUser,
     updateUser,
     updatePartialUser,
     deleteUser
}