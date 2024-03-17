const mongoose = require('mongoose')

const postModel = mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    test: {
        type: String,
        require: true
    },
    likes: {
        type: Array,
        require: true
    },
    retwitte: {
        type: Array,
        require: true
    }
})
mongoose.model('postModel', postModel);
module.exports = postModel;