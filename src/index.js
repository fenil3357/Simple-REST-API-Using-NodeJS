let express = require('express')
let app = express();
let personRoute = require('./routes/person')
let path = require('path');
let customerRoute = require('./routes/customer')
let bodyParser = require('body-parser') 

app.use(bodyParser.json())


const { dirname } = require('path');

app.use((req, res, next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    // res.send('')
    // or we can use
    next()
})

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'))

app.use((req, res, next)=>{
    res.status(404).send('Error 404 : Your Brain Not Found..')
})

app.use((err, req, res, next)=>{
    console.error(err.stack)

    res.sendFile(path.join(__dirname, '../public/500.html'))
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.info(`Server is running on ${PORT}...`))