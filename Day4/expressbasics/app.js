const express = require('express');
const app =express();


//middleware
// app.use('/home',(req,res)=>{
//     //console.log(req);
//     res.send('<h1> hiiiiiiiiiiiiiiiiiiiiiii</h1>')
//     console.log(res);

// })

app.listen(8080,()=>{
    console.log('server is running at port 8080');
})

//get()
app.get('/thakgaye',(req,res)=>{
    res.send('<h1>good afternoon</h1>')
    console.log(res);
})
app.get('/bsskro',(req,res)=>{
    res.send('<h1>bass kara </h1>')
    console.log(res);
})

app.get('/by',(req,res)=>{
    res.send('<h1>class over kro</h1>')
    console.log(res);
})
