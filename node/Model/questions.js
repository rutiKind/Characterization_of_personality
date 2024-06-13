const mongoose = require('mongoose')
const answers = require('./answers')

const questionSchema=mongoose.Schema({
    Content:{
        type:String,
        require:true
    },
   

})
module.exports = mongoose.model('Question', questionSchema)