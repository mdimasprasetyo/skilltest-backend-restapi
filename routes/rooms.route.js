module.exports = app => {

    const rooms = require ("../controllers/rooms.controllers");

    var router = require("express").Router();

    router.post("/", rooms.create);

    router.get("/", rooms.findAll);

    router.get("/:id", rooms.findOne);

    router.put("/:id", rooms.update);

    app.use('/api/rooms', router);
}