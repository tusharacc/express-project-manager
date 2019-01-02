const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    projectName:  { type: String },
    startDate: { type: Date },
    endDate: {type: Date},
    priority: {type: Number},
    completed: {type: String, defaut:"In Progress"},
    managerEmpId: {type: String}
},{
collection: "projects"});

module.exports = mongoose.model('Project',projectsSchema);

