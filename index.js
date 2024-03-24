const JSONServer = require ("json-server"); // ES5 to ES6
const MPServer = JSONServer.create(); // create db
const router = JSONServer.router("db.json"); // route to db
const middleware = JSONServer.defaults(); // to convert to json

const PORT = 3000 || process.env.PORT  // mentioning the required port

MPServer.use(middleware);
MPServer.use(router);

MPServer.listen(PORT, () => {
    console.log(`MediaPlayer server started at PORT: ${PORT} and waiting for client request.`);
}) // run node index.js to see if it works