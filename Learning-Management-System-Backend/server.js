const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// app.use("/",(req,res)=>{
//     res.send("Hello World");
// })

const mongo = require('mongoose');
// const mongo1 = require('mongo');
mongo.connect("mongodb://localhost:27017/lms",function(err,response){
    if(err){
        console.log("Mongo Error"+err);
    }
    else{
        console.log("MongoDB is connected successfully");
    }
})
app.use(bodyParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"http://localhost:4200");
    res.header('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTION,PATCH");
    res.header('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

const Schema = mongo.Schema;
var registerSchema = new Schema({
    firstName:String,
    lastName:String,
    date:Date,
    email:String,
    password:String,
    mobile:Number,
    country:String,
    gender:String,
    role:String,
    status:String,
    registercourses:[String]
})
var CourseSchema = new Schema({
    courseName:String,
    duration:String,
    price:String,
    createdby:String,
    coursedescription:String,
    status:String,
    learning_outcome_1:String,
    learning_outcome_2:String,
    learning_outcome_3:String,
    learning_outcome_4:String,
    learning_outcome_5:String,
    learning_outcome_6:String,
 })
 let courseModel = mongo.model('Courses',CourseSchema,'Courses');
let model = mongo.model('registerData',registerSchema,'registerData');

app.post("/api/updatestatus",function(req,res){
    console.log(req.body);
    model.findByIdAndUpdate(req.body._id,{
        status:req.body.status
    },function(err,data){
        if(err){
           res.send({data:err});
        }
        else{
            res.send({data:req.body.status+"Successfully"});
        }
    })
})
app.post("/api/updatecoursestatus",function(req,res){
    console.log(req.body);
    courseModel.findByIdAndUpdate(req.body._id,{
        status:req.body.status
    },function(err,data){
        if(err){
           res.send({data:err});
        }
        else{
            res.send({data:req.body.status+"successfully"})
        }
    })
 })
 app.post("/api/updatepassword",function(req,res){
    console.log(req.body);
    model.findOneAndUpdate({"email":req.body.email},{$set:{'password':req.body.password}},function(err,data){
        if(err){
            res.send({data:err});
        }
        else{
            res.send({data:"password has been changed"})
        }
    })
 })
 app.post("/api/updatecourses",function(req,res){
    model.findByIdAndUpdate(req.body._id,{$push:{registercourses:req.body.coursesid}},function(err,data){
        if(err){
           res.send({data:err});
        }
        else{
           res.send({data:"course is been added"})
        }
    })
 })

app.listen(4000,()=>{console.log('server is running on port 4000')});
