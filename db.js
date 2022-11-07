const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Tarpon3473!",
    host: "localhost",
    port: "5432",
    database: "todolist"
});

module.exports = pool;