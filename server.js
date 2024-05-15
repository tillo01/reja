console.log("Web serverdi boshlash ");
const express = require('express');
const app = express();
const http = require("http");

// 1 Kirish code
app.use (express.static("public")); // Bu brauzerdan kirib kelyotgan zaproslar uchun publick folder ochiq degan manodi anglatadi
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 2 Session
// 3 views code
app.set("views","views");
app.set("view engine","ejs");

// 4 Routing code
app.post("/create-item", (req,res)=>{
console.log(req);
res.json({test: "succes"});
} )
app.get("/", function(req,res){
    res.render("harid");
} )


app.get("/", function (req,res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running succsessfully on port: ${PORT}`);
});
