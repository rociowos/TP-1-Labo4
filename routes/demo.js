const {Router} = require('express');
const { getEstrenos, getAnio, getTendencias, getGeneros, getFiltrarGeneroID } = require('../controllers/demo');


const rutas = Router();

rutas.get('/estrenos', getEstrenos);
rutas.get('/anio/:id', getAnio);
rutas.get('/tendencias', getTendencias);
rutas.get('/generos', getGeneros); 
rutas.get('/generoID/:id', getFiltrarGeneroID);


module.exports = rutas;
