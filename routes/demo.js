const {Router} = require('express');
const { getEstrenos, getAnio, getTendencias, getGeneros } = require('../controllers/demo');


const rutas = Router();

rutas.get('/estrenos', getEstrenos);
rutas.get('/anio/:id', getAnio);
rutas.get('/tendencias', getTendencias);
rutas.get('/generos', getGeneros); 


<<<<<<< HEAD
module.exports = rutas;
=======
module.exports = rutas;
>>>>>>> f7e13924a5e06f9e8985663427150a8983c5525f
