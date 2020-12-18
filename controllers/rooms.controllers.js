const db = require("../models");
const Rooms = db.rooms;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.room_name) {
        res.status(400).send({
            message: "content cannot be empty!"
        });
        return;
    }

    const rooms = {
        room_name: req.body.room_name,
        room_capacity: req.body.room_capacity,
        photo: req.body.photo
    };

    Rooms.create(rooms).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "some error occured while creating the rooms"
        });
    });
};

exports.findAll = (req, res) => {
    const room_capacity = req.query.room_capacity;
    var condition = room_capacity ? {room_capacity: {[Op.like]: `%${room_capacity}`}}: null;

    Rooms.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "some error occured while retrieving rooms"
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Rooms.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "error retrieving rooms with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Rooms.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "rooms was updated successfully"
            });
        } else {
            res.send({
                message: `cannot update rooms with id=${id}. maybe rooms was not found or req.body is empty`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `error updating rooms with id=${id}`
        });
    });
};