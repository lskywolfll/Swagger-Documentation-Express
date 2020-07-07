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
 * /api/Usuarios:
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

module.exports = app;