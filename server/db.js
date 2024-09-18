//connect to the postgres DB

const Pool = require('pg').Pool
require('dotenv').config() //hold sensitive infomation

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'todoapp'
})

module.exports = pool