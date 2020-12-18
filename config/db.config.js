module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b22c45369769e3",
    PASSWORD: "56763e37",
    DB: "heroku_7fa8e2d0290e9fb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};