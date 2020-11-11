const config = require('./config');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('template',{titulo: 'pug', mensaje: 'Prueba de render'});
});

app.set('view engine', 'pug');

app.listen(config.port, () => console.log('Servidor corriendo en el puerto ' + config.port));
