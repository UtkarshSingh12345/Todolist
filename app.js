const express=require("express");
const server = express();
const bodyParser=require("body-parser");
server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended:true}));
server.get("/",function(req,res){
  var date= new Date();
  var option={
    weekday: 'long',  day:'numeric',  year:'numeric', month:'long',  minute:'numeric' ,second:'numeric',
  };
  var day=(date.toLocaleDateString("en-us", option));
  res.render( "list",{day:day});







});

  // day="this is a weekend day";
  // day="this is not a weekend day";







server.listen(1000,function()
{
  console.log("server has been started");
});