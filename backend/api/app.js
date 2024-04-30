const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({hello:"Hello"})
})

app.listen(5000,()=>{
    console.log('Running')
})