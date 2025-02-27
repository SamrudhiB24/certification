const express = require('express') // import express
const app = express();

// app.get('/dog',(req,res)=>{
//     res.send('<h1>good morning</h1>')
// })
// app.get('/cat',(req,res)=>{
//     res.send('<h1>hiiiiiiiiiiiiii</h1>')
// })

// app.get('/monkey',(req,res)=>{
//     res.send('<h1>helooooooooooo</h1>')
// })
app.get('/animal/:anything',(req,res)=>{
    console.log(req.params);
    console.log(req.params.anything);
    const {anything}=req.params;
    res.send(`<h1>I am ${anything}</h1>`)
})

app.get('/search',(req,res)=>{
    console.log(req.query);
    console.log(req.query.name);
    const {name}=req.query;
    res.send(`<h1>my query is ${name}</h1>`)
})


app.listen(8080,()=>{
    console.log("server start on 8080 port")
})