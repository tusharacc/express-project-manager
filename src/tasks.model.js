const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    taskName:  { type: String },
    projectId: {type: mongoose.Schema.Types.ObjectId,ref: 'Project'},
    startDate: { type: Date },
    endDate: {type: Date},
    priority: {type: Number},
    parentTask: {type: String},
    completed: {type: Boolean, defaut:false},
    managerEmpId: {type: String}
},{
collection: "tasks"});

module.exports = mongoose.model('Task',taskSchema);

