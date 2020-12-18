module.exports = (sequelize, Sequelize) => {
    const Rooms = sequelize.define("rooms", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        room_name: {
            type: Sequelize.STRING
        },
        room_capacity: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        }
    });

    return Rooms;
};