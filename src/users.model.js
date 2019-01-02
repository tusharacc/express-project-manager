const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName:  { type: String },
    lastName: { type: String },
    employeeId: {type: String}
},{
collection: "users"});

module.exports =  mongoose.model('User',userSchema);


