const express = require("express");
const app = express();
const mongoose=require("mongoose");
const routerapp=require("./router/index");
const cors=require("cors")

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});

mongoose.connect("mongodb+srv://aakashkandel:Aakash12345@nodejs.mqjxskr.mongodb.net/complain?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (()=>{
    console.log("Database Connected Successfully");
})
.catch(()=>{
    console.log("unable to connect Database")
})
app.get('/', (req, res) => {
    res.send("Hello world!");
});
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routerapp);

