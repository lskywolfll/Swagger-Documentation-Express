const express = require('express');
const app = express();


/**
 * @swagger
 * definitions:
 *   Usuario:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /Usuarios:
 *   get:
 *     tags:
 *       - Usuarios
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An object 
 *         schema:
 *           $ref: '#/definitions/Usuario'
 */
app.get('/Usuario', (req, res) => {
    res.json({
        name: 'Rene'
    });
});

app.post('/Usuario', (req, res) => {
    const { nombre } = req.body;

    res.status(200).json({
        nombre
    })
});

module.exports = app;