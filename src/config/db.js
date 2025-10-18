import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const poolConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

if (process.env.DB_SOCKET) {
  poolConfig.socketPath = process.env.DB_SOCKET;
  console.log("Using DB socket path:", process.env.DB_SOCKET);
} else {
  // poolConfig.host = process.env.DB_HOST || "127.0.0.1";
  // poolConfig.port = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;
  poolConfig.host = "34.69.99.62";
  poolConfig.port = 3306;
  console.log(`Using DB host: ${poolConfig.host}, port: ${poolConfig.port}`);
}

const pool = mysql.createPool(poolConfig);

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the MySQL database.");
    if (connection) connection.release();
  }
});

export default pool.promise();
