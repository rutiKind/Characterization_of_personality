const express = require('express')
const router = express.Router()

const{
    getAll,
    addQuestion,
    sendMail
}=require('../Controler/question')


router.get('/getAll',getAll)
router.post('/addQuestion',addQuestion)
router.post('/sendMail',sendMail)

module.exports=router