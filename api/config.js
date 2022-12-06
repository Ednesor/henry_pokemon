const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "password";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 8080;
const PORT = process.env.PORT || 3001;
const DB_DATABASE = process.env.DB_DATABASE || "pokemon"
const DB_NAME = process.env.DB_NAME || "userdb";
const HOST = process.env.HOST || "http://localhost:3000"

module.exports = { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_DATABASE, HOST }