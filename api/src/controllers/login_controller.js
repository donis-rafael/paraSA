// << db setup >>
const usuario = require('../models/user');

const get_users = (req, res) => {
    usuario.find()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
}

const registrar = (req, res) => {
    const newUser = new usuario({
        usuario: req.body.usuario,
        password: req.body.password,
        nombre: req.body.nombre,
        tipo: req.body.tipo
    });

    newUser
        .save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({message: err});
        });
}

const login = (req, res) => {
    usuario.find({usuario: req.query.usuario, password: req.query.password})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
}

const remove = (req, res) => {
    usuario.deleteOne({
        usuario: req.body.usuario, 
        nombre: req.body.nombre, 
        tipo: req.body.tipo
    })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({
            message: err
        });
    });
}

module.exports = {
    get_users: get_users,
    registrar: registrar,
    login: login,
    remove: remove
}