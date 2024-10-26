const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

await pgclient.connect();

console.log("here")


const table = 'CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))'
const text = 'INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *'
const values = ['Mona the', 'Octocat', 9, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States', 'octocat@github.com']

pgclient.query(table, (err, res) => {
    console.log("creating table");
    if (err) throw err;
});

pgclient.query(text, values, (err, res) => {
    console.log("query..");
    if (err) throw err;
});

pgclient.query('SELECT * FROM student', (err, res) => {
    console.log("select....");
    if (err) throw err;
    console.log(err, res.rows); // Print the data in student table
    pgclient.end();
});

console.log("end")
