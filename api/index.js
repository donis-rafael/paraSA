'use strict'

require('dotenv').config();

var logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

var login = require('./src/routes/login');

app.use('/', login);

const host = process.env.HOST || '192.168.219.135';
const db = process.env.DB || 'BackendSAGrupo4';
const puerto = process.env.PORTdb || 27017;

const dbConnectionUrl = `mongodb://${host}:${puerto}/${db}`;

// Connect to Database
mongoose.connect(dbConnectionUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Conectado Correctamente")
).then(() => {
    app.listen(port);
    console.log('Servidor corriende en el puerto: ' + port);
});