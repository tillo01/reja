// The zero one

console.log("Web serverdi boshlash ");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err,data) =>{
    if(err){
        console.log("ERROR:",err);
    }else{
        user= JSON.parse(data);
    }
})
// Mongo db chaqirish
const db = require("./server").db();

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


app.get('/author',(req,res)=>{
    res.render("author",{user: user});
})


app.get("/", function (req,res) {
    res.render("reja");
});



module.exports = app;

