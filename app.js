const express=require("express");
const server = express();
const bodyParser=require("body-parser");
server.set('view engine', 'ejs');
server.use(express.static("public"));
let to= [];
let todo= [ ];
server.use(bodyParser.urlencoded({extended:true}));
server.get("/",function(req,res){
  var date= new Date();
  var option={
    weekday: 'long',  day:'numeric',  year:'numeric', month:'long',  minute:'numeric' ,second:'numeric',
  };
  var day=(date.toLocaleDateString("en-us", option));
  res.render( "list",{listTitle:day,day1:to});
});

  // day="this is a weekend day";
  // day="this is not a weekend day";
server.post("/",function(req,res)
{day1=req.body.num1;
   if(req.body.list==="doWork")
  {
    todo.push(day1);
    res.redirect("/hello");

  }
  else{
to.push(day1);
    res.redirect("/");
}


});
server.get("/hello",function(req,res){
  res.render("list",{listTitle:"doWork", day1:todo});
});


server.get("/pop",function(req,res){
  res.render("pop");
});





server.listen(1000,function()
{
  console.log("server has been started");
});
