const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timestamp = new Schema({
    time:String
});

module.exports = mongoose.model('timestamp',timestamp);