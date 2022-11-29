const Pool = require("pg").Pool;
const path = require('path')

const pool = new Pool({
    user: "xeospjhfdnisgu",
    password: "19b349e131e8e1e10defe600f970229901f1a58279fdbc5a4d20ffe1de8490d5",
    host: "ec2-3-217-251-77.compute-1.amazonaws.com",
    port: "5432",
    database: "d1lqsag75fjjrj"
});

module.exports = pool;