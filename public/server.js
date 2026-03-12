const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const doctors = [
{
year:2021,
regno:"123456",
state:"Uttar Pradesh",
name:"Dr Example",
father:"Mr Example"
}
];

app.get("/search",(req,res)=>{

let name = req.query.name;

let result = doctors.filter(d =>
d.name.toLowerCase().includes(name.toLowerCase())
);

res.json(result);

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});