module.exports = {
    productionTip: false,
    database: {
        process.env.DB_HOST = 'PLANETSCALE_HOST';
        port: process.env.DB_PORT = '3306';
        user: process.env.DB_USER = 'PLANETSCALE_USERNAME';
        password: process.env.DB_PASSWORD = 'PLANETSCALE_PASSWORD';
        name: process.env.DB_NAME = 'PLANETSCALE_NAME';
    }
  }