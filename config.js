// local mysql




// live server

const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'turntable.proxy.rlwy.net',
    port: 49229,
    user: 'root',
    password: 'uDgydrXReLDVobOSPJFiIrFEkExNShjv',
    database: 'railway',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.warn('✅ Connected to Railway MySQL');

module.exports = db;



