let express = require('express');
const res = require('express/lib/response');
let route = express.Router();

//QueryString => query property on the request object
route.get('/person', (req, res)=>{
    if(req.query.name){
        res.send(`You requested a person ${req.query.name}!`)
    }
    else{
        res.send('You requested a person!')
    }
})

//Params property on the request object
route.get('/person/:name', (req, res)=>{
    res.send(`You requested a person ${req.params.name}!`)
})

route.get('/error', (req, res)=>{
    throw new Error('This is forced error!')
})

module.exports = route