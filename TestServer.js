var express=require("express");
var app=express();
var path=require("path");
var fs=require("fs");
app.use(express.static(require('path').join(__dirname, 'dist')));
app.get("/",function(req,res){
	res.render("Index");
});
app.listen(8080);