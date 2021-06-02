const express=require("express");
const server = express();
const bodyParser=require("body-parser");
server.set('view engine', 'ejs');
let date1="";
server.use(bodyParser.urlencoded({extended:true}));
server.get("/",function(req,res){
  let date= new Date();
  let option={
    weekday: 'long',  day:'numeric',  year:'numeric', month:'long',  minute:'numeric' ,second:'numeric',
  };
  let day=(date.toLocaleDateString("en-us", option));
  res.render( "list",{day:day, day1:date1});

server.post("/",function(req,res){
   date1=req.body.num1;
  res.redirect("/");
});





});

  // day="this is a weekend day";
  // day="this is not a weekend day";







server.listen(1000,function()
{
  console.log("server has been started");
});
