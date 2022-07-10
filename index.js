const express = require('express');
const handler = require("./books")

const app = express();

app.use(express.json());

app.get("/books",handler.allBooks,handler.getBooks)
app.get("/book/:name",handler.getBook)

app.listen(3000,()=>{
    console.log("Server start on port 3000");
})