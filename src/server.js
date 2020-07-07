const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsondoc = require('swagger-jsdoc');
// Routes
app.use(require('./routes/index'));

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

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
    servers: [
        {
            url: "http://localhost:3000/"
        }
    ],
};

const options = {
    swaggerDefinition,
    // Apis: toma la ruta relativa de donde se esta utilizando el node_modules oseas desde el root para el proyecto por eso utilizamos el nombre de la carpeta que estamos utilizando
    apis: ['src/routes/*.js'],
};

const specs = swaggerJsondoc(options);

console.log(specs)
app.use("/docs", swaggerUi.serve);

app.get("/docs", swaggerUi.setup(specs, { explorer: true, swaggerOptions: options }));

app.listen(3000, () => {
    console.log(`> listening on: http://localhost:3000`)
});