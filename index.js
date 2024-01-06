//1. import json-server
const jsonServer = require('json-server')

//2. create a server application using json-server
const restServer = jsonServer.create()

//3. setup path for db.json server
const router = jsonServer.router('db.json')

//4. return a middilware instance used by json-server
const middilware = jsonServer.defaults()

//5. setup port for db.jsnon
const port = 3001

//6. use is server
restServer.use(middilware)
restServer.use(router)

//to run the server(restServer)
restServer.listen(port,()=>{
    console.log("rest server listening on the port" + port );
})