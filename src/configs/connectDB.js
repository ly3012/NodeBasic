import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '301201v++',
    database: 'nodejsbasic'
});

export default connection;

