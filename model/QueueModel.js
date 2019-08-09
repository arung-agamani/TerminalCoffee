const path = require('path');
const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    order : {
        type : Array,
        required : true,
    }
});

const Queue = mongoose.model('appQueue', QueueSchema);

module.exports = Queue;