const express = require('express');
const crypto = require('crypto'); 
const connection = require('./database/connection')

const routes = express.Router();

routes.post('/ongs', async (request, response) => {
    const { name , email, whatsapp , city, uf} = request;

    const id = crypto.randomBytes(4).toString('HEX');

    console.log(name);

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json();
});

module.exports = routes;