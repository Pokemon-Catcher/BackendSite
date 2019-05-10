const noteRoutes = require('./routes');

module.exports = function (server, db) {
    noteRoutes(server, db);
};