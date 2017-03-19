const path = require('path');

module.exports = {
    contentBase: path.join(__dirname, "client"),
    compress: false,
    // to change host with npm start, add "-- --host=localhost"
    // to change port with npm start, add "-- --port=9001"
    port: 9000,
    historyApiFallback: true,
    watchContentBase: true,
    watchOptions: {
        aggregateTimeout: 300, poll: 1000
    },
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
};
