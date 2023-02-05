const express = require('express')
const as = require('./authentication')
const cors = require('cors')




const app = express()
app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))


app.post('/register',(req,res)=>{
    as.register(req.body.name,req.body.email,req.body.mobile,req.body.password)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})

app.post('/login',(req,res)=>{
    as.login(req.body.email,req.body.password)
    .then(data=>{
        if(data){
            res.status(data.statuscode).json(data)
        }
    })
})

app.listen(3000, () => {
    console.log('server listening to the port number 3000')
})