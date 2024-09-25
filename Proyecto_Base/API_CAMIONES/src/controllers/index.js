const database = require('../db');

//Tablas BD
const createMaquinaria = (req, res) => {
    const query =  'CREATE TABLE IF NOT EXISTS maquinaria(id_maquinaria int AUTO_INCREMENT, n_serie VARCHAR(1000), marca VARCHAR(50), fecha_adquisicion DATE, PRIMARY KEY(id_maquinaria))';

    database.query(query, (err) => {
        if (err) throw err;
        res.send('Tabla creada')
    });
};

const createFichaIncidenciasC = (req, res) => {
    const query =  'CREATE TABLE IF NOT EXISTS ficha_incidencias_c(id_ficha_c int AUTO_INCREMENT, id_maquinaria VARCHAR(1000), n_serie VARCHAR(1000), fecha DATETIME, descripcion VARCHAR(1000), id_jefe_motores VARCHAR(1000), id_mecanico VARCHAR(1000), PRIMARY KEY(id_ficha_c))';

    database.query(query, (err) => {
        if (err) throw err;
        res.send('Tabla creada')
    });
};

// Querys Maquinaria (Camiones)
const showMaquinaria = (req, res) => {
    const query =  'SELECT * FROM maquinaria';

    database.query(query, (err,data) => {
        if (err) throw err;
        return res.json(data)
    });
};

const addMaquinaria = (req, res) => {
    const query =  'INSERT INTO maquinaria(`n_serie`, `marca`, `fecha_adquisicion`) VALUES (?)';
    const values = [
        req.body.n_serie,
        req.body.marca,
        req.body.fecha_adquisicion
    ];

    database.query(query, [values], (err,data) => {
        if (err) throw err;
        return res.json('Maquina agregada')
    });
};

// Querys Ficha Incidencias Camiones

const addFichaIncidenciaC = (req, res) => {
    const query =  'INSERT INTO ficha_incidencias_c(`id_maquinaria`, `n_serie`, `fecha`, `descripcion`, `id_jefe_motores`, `id_mecanico`) VALUES (?)';
    const values = [
        req.body.id_maquinaria,
        req.body.n_serie,
        req.body.fecha,
        req.body.descripcion,
        req.body.id_jefe_motores,
        req.body.id_mecanico
    ];

    database.query(query, [values], (err,data) => {
        if (err) throw err;
        return res.json('Incidencia (Camion) agregada')
    });
};

const showHistoriales = (req, res) => {
    const query =  'SELECT DISTINCT id_maquinaria FROM ficha_incidencias_c';

    database.query(query, (err,data) => {
        if (err) throw err;
        return res.json(data)
    });
};

const showHistorialC = (req, res) => {
    const query =  'SELECT * FROM ficha_incidencias_c WHERE id_maquinaria = ?';
    const value = req.body.id_maquinaria;

    database.query(query, [value] ,(err,data) => {
        if (err) throw err;
        return res.json(data)
    });
};



module.exports = {
    createMaquinaria,
    createFichaIncidenciasC,
    showMaquinaria,
    addMaquinaria,
    addFichaIncidenciaC,
    showHistoriales,
    showHistorialC
}