require('dotenv').config();
const knex = require('knex')({
    client: "mysql",
    connection : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }
})

knex.schema.createTable('user_data', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('last_name').notNullable()
    table.string('email').notNullable()
    table.bigint('phone').notNullable()
    table.string('password').notNullable()
}).then((data) => {
    console.log("Table has been created successfully...");
}).catch((err) => {
    console.log("Table has been already created...");
    // console.log(err);
})

module.exports = knex 