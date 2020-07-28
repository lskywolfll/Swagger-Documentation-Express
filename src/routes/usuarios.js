const express = require('express');
const app = express();


/**
 * @swagger
 * components:
 *      schemas:
 *          Usuario:
 *              type: object
 *              properties:
 *                  name: 
 *                      type: string
 *                      example: Rene
 *          List_Usuario:
 *              type: object
 *              properties:
 *                  ok:
 *                      type: bool
 *                      example: true
 *                  usuarios:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Usuario'
 */

/**
 * @swagger
 * /Usuarios:
 *   get:
 *     tags:
 *       - Usuarios
 *     description: Retorna una lista de usuarios
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An object 
 *         content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/List_Usuario'
 */
app.get('/Usuarios', (req, res) => {
    res.json({
        ok: true,
        usuarios: [{ name: 'Rene' }, { name: 'Jose' }, { name: 'Fernando' }]
    });
});

/**
 * @swagger
 * /Usuarios:
 *  post:
 *      tags:
 *          - Usuarios
 *      description: se crea un usuario
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Se crea un usuario
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 */
app.post('/Usuarios', (req, res) => {
    const { nombre } = req.body;

    res.status(200).json({
        nombre
    })
});

module.exports = app;