module.exports = {
    HOST: "localhost",
    PORT: 1433,
    USER: "sa",
    PASSWORD: "123456",
    DB: "lab8",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };