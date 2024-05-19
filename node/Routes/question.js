const express = require('express')
const router = express.Router()

const{
    getAll,
    addQuestion
}=require('../Controler/question')


router.get('/getAll',getAll)
router.post('/addQuestion',addQuestion)
module.exports=router