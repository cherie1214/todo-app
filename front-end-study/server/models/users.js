var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    pw: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    memberStatus: {
        type: String,
        default: "MEMBER_NORMAL",
    }
});

// http://mongoosejs.com/docs/schematypes.html

module.exports = mongoose.model('users', usersSchema);
