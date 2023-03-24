const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const port = 4000 || process.env.port;
const router = require('./routes/events-router');

const app = express();

const url = `mongodb+srv://order:order@cluster0.4egnqav.mongodb.net/?retryWrites=true&w=majority`;

//middileware
app.use(express.json());
app.use(bodyparser.json());
app.use("/v1", router)



mongoose.connect(url).then(() => console.log("Connected to mongoDb")).then(() => {
    app.listen(port, () => console.log(`server is up at port ${port}`))
}).catch(() => console.log("Connection to mongoDb Failed!"));