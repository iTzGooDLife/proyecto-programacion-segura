const database = require('../db');

// Tablas BD
const createMotor = (req, res) => {
    const query =  'CREATE TABLE IF NOT EXISTS motor(id_motor int AUTO_INCREMENT, n_serie VARCHAR(1000), id_maquina VARCHAR(1000), marca VARCHAR(50), fecha_adquisicion DATE, PRIMARY KEY(id_motor))';

    database.query(query, (err) => {
        if (err) throw err;
        res.send('Tabla creada')
    });
};

const createFichaIncidenciasM = (req, res) => {
    const query =  'CREATE TABLE IF NOT EXISTS ficha_incidencias_m(id_ficha_m int AUTO_INCREMENT, n_serie VARCHAR(1000), fecha DATETIME, descripcion VARCHAR(1000), id_jefe_motores VARCHAR(1000), id_mecanico VARCHAR(1000), PRIMARY KEY(id_ficha_m))';

    database.query(query, (err) => {
        if (err) throw err;
        res.send('Tabla creada')
    });
};

// Querys Motor
const showMotor = (req, res) => {
    const query =  'SELECT * FROM motor';

    database.query(query, (err,data) => {
        if (err) throw err;
        return res.json(data)
    });
};

const addMotor = (req, res) => {
    const query =  'INSERT INTO motor(`n_serie`, `id_maquina`, `marca`, `fecha_adquisicion`) VALUES (?)';
    const values = [
        req.body.n_serie,
        req.body.id_maquina,
        req.body.marca,
        req.body.fecha_adquisicion
    ];

    database.query(query, [values], (err,data) => {
        if (err) throw err;
        return res.json('Maquina agregada')
    });
};

// Querys Ficha Incidencia Motores
const addFichaIncidenciaM = (req, res) => {
    const query =  'INSERT INTO ficha_incidencias_m(`n_serie`, `fecha`, `descripcion`, `id_jefe_motores`, `id_mecanico`) VALUES (?)';
    const values = [
        req.body.n_serie,
        req.body.fecha,
        req.body.descripcion,
        req.body.id_jefe_motores,
        req.body.id_mecanico
    ];

    database.query(query, [values], (err,data) => {
        if (err) throw err;
        return res.json('Incidencia (Motor) agregada')
    });
};

const showHistoriales = (req, res) => {
    const query =  'SELECT DISTINCT n_serie FROM ficha_incidencias_m';

    database.query(query, (err,data) => {
        if (err) throw err;
        return res.json(data)
    });
};

const showHistorialM = (req, res) => {
    const query =  'SELECT * FROM ficha_incidencias_m WHERE n_serie = ?';
    const value = req.body.n_serie;

    database.query(query, [value] ,(err,data) => {
        if (err) throw err;
        return res.json(data)
    });
};


module.exports = {
    createMotor,
    createFichaIncidenciasM,
    showMotor,
    addMotor,
    addFichaIncidenciaM,
    showHistorialM,
    showHistoriales
}