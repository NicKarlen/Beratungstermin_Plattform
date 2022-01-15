const express = require('express')
const path = require('path')
const fs = require('fs')
const { stringify } = require('querystring')


const app = express()
const port = 3000


// This sends all the static files in the folder 'public' to the client
app.use(express.static(__dirname+'/public'))


app.use(express.json());    // this is needed to read JSON responses from the client (in POST or PATCH)


// This is the server listening for client to connect on the given port (3000)
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})



