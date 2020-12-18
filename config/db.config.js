module.exports = {
    HOST: "localhost",
    USER: "mdp",
    PASSWORD: "bukandimas",
    DB: "skilltest",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};