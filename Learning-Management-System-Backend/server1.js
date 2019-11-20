const express = require('express');
const bodyParser = require('body-parser');
const app = express();




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

var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("lms");
    //var myquery = { address:  };
    //var newvalues = { $set: { name: "Michael", address: "Canyon 123" } };
    dbo.collection("registerData").updateOne({email}, {$set:{password:}}, function(err, res) {
      if (err) throw err;
      console.log("password is been updated");
      db.close();
    });
  });


app.listen(4001,()=>{console.log('server is running on port 4001')});
