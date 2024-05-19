const mongoose = require('mongoose')

const AnswerSchema=mongoose.Schema({
    Content:{
        type:String,
        require:true
    },
    Score:{
        type:Number,
        require:true
    }

})
module.exports = mongoose.model('Answers', AnswerSchema)