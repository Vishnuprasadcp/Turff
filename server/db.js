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

const Cricket = mongoose.model('Cricket',{
    Date:String,
    Time_Slot:String,
    name:String,
    mobile:Number
})
const Football = mongoose.model('Football',{
    Date:String,
    Time_Slot:String,
    name:String,
    mobile:Number
})
const Badminton = mongoose.model('Badminton',{
    Date:String,
    Time_Slot:String,
    name:String,
    mobile:Number
})
const TableTennise = mongoose.model('TableTennise',{
    Date:String,
    Time_Slot:String,
    name:String,
    mobile:Number
})

module.exports={User,Unicode,Cricket,Football,Badminton,TableTennise}
