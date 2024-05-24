const http = require("http");

const mongodb = require ("mongodb");

let db;
const connectionString = "mongodb+srv://tillo15pro:K85KBEPmhY2gvFSi@cluster0.pzgsaez.mongodb.net/reja";
mongodb.connect (connectionString,
    {
    
    useNewUrlParser:true,
     useUnifiedTopology:true,
    }, (err,client) => {

if(err) console.log("ERROR on onnection mongodb");
else{
   module.exports = client;
    console.log("MongoDb connection sccessed");
    const app = require("./app")
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function(){
        console.log(`The server is running succsessfully on port: ${PORT}, http://localhost:${PORT} `);
    });
}

});

