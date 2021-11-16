const  {plants_json} = require( "./plants")
const express = require('express')
const app = express()
const cors = require("cors")
const port = 3333



app.use(cors())
app.get('/', (req, res)=>{
    res.json(plants_json)
})

app.listen(port, () =>{
    console.log(`Example app listenting at http://localhost:${port}`)
})

