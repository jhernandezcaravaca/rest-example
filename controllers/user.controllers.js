const {response} = require('express');

const getUser = (req, res = response) =>{

    const {nombre="vacio", edad} = req.query;
    res.json({
        nombre,
        edad,
        mensaje: "GET API - CONTROLADOR"
    });
}

const postUser = (req, res = response) =>{

    const {nombre, edad} = req.body;

    res.status(201).json({
        mensaje: "POST API - Desde Controlador",
        nombre,
        edad
    });
}

const putUser = (req, res = response) =>{

    const id = req.params.id;

    res.json({
        mensaje: "PUT API - CONTROLADOR",
        id
    });
}

const deleteUser = (req, res = response) =>{
    res.json({
        mensaje: "DELETE API - CONTROLADOR"
    });
}


module.exports = {
    getUser, 
    postUser,
    putUser,
    deleteUser,
}