const mongoose = require('mongoose')
const answers = require('./answers')

const questionSchema=mongoose.Schema({
    Content:{
        type:String,
        require:true
    },
    Answer:[{
        type:mongoose.Types.ObjectId,
        ref:'Answers',
        require:false
    }]

})
module.exports = mongoose.model('Question', questionSchema)