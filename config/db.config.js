// DB 설정
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "qpemfh10@@",
  DB: "proxy_test_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};