const express = require('express')
const router = express.Router()

const{
    getAll
}=require('../Controler/answer')


router.get('/getAll',getAll)
module.exports=router