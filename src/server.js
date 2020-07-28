const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsondoc = require('swagger-jsdoc');
const { host, port } = require('./config/config');
const cors = require('cors');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "TheCodebuzz API",
        version: "1.0.0",
        description:
            "Documentacion experimental con expresss puro",
        license: {
            name: "MIT",
            url: "https://localhost"
        },
        contact: {
            name: "René",
            url: "https://github.com/lskywolfll",
            email: "renealejandrosanchezmorales@gmail.com"
        }
    },
    basePath: '/',
    servers: [
        {
            url: `${host}:${port}`
        }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
    schemes: ['http', 'https'],
};

const options = {
    swaggerDefinition,
    // Apis: toma la ruta relativa de donde se esta utilizando el node_modules oseas desde el root para el proyecto por eso utilizamos el nombre de la carpeta que estamos utilizando
    apis: ['src/routes/*.js'],
};

const specs = swaggerJsondoc(options);

app.use(cors({ methods: ['*'], credentials: false, origin: '*' }));

app.use("/api-docs", swaggerUi.serve);

app.get("/api-docs", swaggerUi.setup(specs, { explorer: true, swaggerOptions: options }));

// Routes
app.use(require('./routes/index'));

app.listen(port, () => {
    console.log(`> listening on ${host}:${port}`);
});

module.exports = app;