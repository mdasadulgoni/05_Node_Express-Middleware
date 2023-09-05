const express = require('express')
const app = express()
require('dotenv').config()
// console.log(process.env);

// Middleware
// object.method()
// app.get(routname,middleware,cbfn)
app.get('/students',(req,res,next)=>{
   console.log('Inside middle first ', req.query.name);
   req.query.name = req.query.name.toUpperCase()
   next()
},(req,res)=>{
   // Object.method(actual argument)
   console.log('Inside cbfn',req.query.name);
   let name = req.query.name
   res.json({"msg" : `Yes Finaly Chacged ${name}`})
})

let PORT = process.env.PORT || 6000
app.listen(PORT,()=>{
   console.log('The server is running ' +PORT);
})