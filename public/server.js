const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

let doctors = [
{
id:1,
year:2021,
regno:"123456",
state:"Uttar Pradesh",
name:"Dr Example",
father:"Mr Example"
},
{
id:2,
year:2020,
regno:"654321",
state:"Delhi",
name:"Dr Rahul",
father:"Mr Sharma"
}
];

app.get("/search", (req,res)=>{

const name = req.query.name;

const result = doctors.filter(d =>
d.name.toLowerCase().includes(name.toLowerCase())
);

res.json(result);

});

app.listen(PORT,()=>{
console.log("Server running on port "+PORT);
});