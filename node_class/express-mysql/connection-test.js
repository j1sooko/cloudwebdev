const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'school-db-kjs1234.mysql.database.azure.com',
    user: 'dbuser',
    password: 'Pass1234',
    database: 'school'
});

conn.connect();
conn.query('select * from student', (error, rows) => {
    if (error) throw error;
    console.log('students: ', rows);
});
conn.end();