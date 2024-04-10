const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

let con = mysql.createConnection({
      host:"sql11.freesqldatabase.com",
      user:"sql11697768",
      password:"uSqP32srlg",
      database:"sql11697768"
      
});

app.post("/save",(req,res)=>{
      let data = [req.body.name, req.body.feedback];
      let sql="insert into student values(?,?)";
      con.query(sql,data,(err,result) =>{
           if(err) res.send(err);
           else    res.send(result);
    });
 });
 

app.listen(9000, () => { console.log("server ready @9000")});