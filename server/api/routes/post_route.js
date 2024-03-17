const expresss = require('express')
const { default: mongoose } = require('mongoose')
const router = expresss.Router()

const postModel = mongoose.model('postModel')





module.exports = router;