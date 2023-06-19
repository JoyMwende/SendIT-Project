const mssql = require('mssql')
const dotenv = require('dotenv')
dotenv.config()

let config = {
    server: process.env.SERVER,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
    port: 1433,
    pool: {
        max: 20,
        min: 0,
        idleTimeoutMillis: 3600
    },
    options: {
        encrypt: false
    }
}

module.exports = config;