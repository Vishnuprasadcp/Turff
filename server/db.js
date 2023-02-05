const mongoose = require('mongoose')


mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/TURFF',{
    useNewUrlParser:true}
)

const User = mongoose.model('User',{
    name:String,
    email:String,
    mobile:Number,
    user_code:Number,
    password:String
})

const Unicode = mongoose.model('Unicode',{
    init_id:Number,
    nextid:Number
})

const Matches = mongoose.model('Matches',{
    user_code:Number,
    Date:String,
    Time_Slot:String
})

module.exports={User,Unicode,Matches}
