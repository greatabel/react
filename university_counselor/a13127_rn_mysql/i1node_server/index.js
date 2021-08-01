const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();

const  PORT = 3002;
app.use(cors());
app.use(express.json())

// 查询记录
app.get("/api/get", (req,res)=>{
	// 不需要全部列的，你自己挑选列，然后返回，我这里是示例
db.query("SELECT bid,email, bad_date, CAST(AES_DECRYPT(time_of_incident,'mykey') AS CHAR(500)) encrypt_incident, picked_up_by, how_arranged FROM bad_date", (err,result)=>{
    if(err) {
    console.log(err)
    } 
console.log(result)
res.send(result)
}
    );   
});


// 添加一条记录
app.post('/api/create', (req,res)=> {

const email = req.body.email;
const bad_date = req.body.bad_date;
const time_of_incident = req.body.time_of_incident;
const picked_up_by = req.body.picked_up_by;
const how_arranged = req.body.how_arranged;

/*
我只是写了例子，你后面需要的字段在这里继续添加，下面的sql继续把后面的需要的列都加上
*/
console.log(email,bad_date)
// INSERT INTO `hope_outreach`.`bad_date` (`email`, `bad_date`, `time_of_incident`, `picked_up_by`, `how_arranged`) VALUES ('outman@126.com', '2021-06-24', 'evening', '21:21', 'by taxi');

db.query("INSERT INTO bad_date (email, bad_date, time_of_incident, picked_up_by, how_arranged) VALUES (?,?,AES_ENCRYPT(?, 'mykey'),?,?)",[email,bad_date,time_of_incident,picked_up_by,how_arranged], (err,result)=>{
   if(err) {
       console.log(err)
   } 
   console.log(result)
}
);   
})



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})