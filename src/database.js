const mongoose = require('mongoose');
const Project = require('./projects.model')
const Task = require('./tasks.model')
const User = require('./users.model')

mongoose.connect("mongodb+srv://dbUser:dbUserPassword01@cluster0-bvedr.mongodb.net/TaskManager?retryWrites=true")
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Failed',err);
});


function getModel(col){
    let model;
    console.log(typeof col, col);
    switch (col) {
        case 'User':
            model = new User(data);
            console.log('In User');
            //break;
        case 'Project':
            model = new Project(data);
            console.log('In Project');
            //break;
        case 'Task':
            model = new Task(data);
            console.log('In Task')
            //break;
    }
    console.log('After switch',model);
    return model
}

module.exports.get = async function(col){
    //let post = new Task();
    let data,status,message;
    console.log('Inside get',col);
    await eval(col).find({})
    .then((docs)=>{
        data = docs;
        status = 'Ok';
        message = 'success';
    })
    .catch((err)=>{
        status = 'Failed'
        message = err;
    }); 
    console.log('After find')
    return {'data':data,'status':status,'message':message};
}

module.exports.post = async function(data,col){
    
    let model;
    console.log('In post method');
    switch (col) {
        case 'User':
            model = new User(data);
            console.log('In User');
            break;
        case 'Project':
            model = new Project(data);
            console.log('In Project');
            break;
        case 'Task':
            model = new Task(data);
            console.log('In Task')
            break;
    }
    await model.save().then((data)=>{
        console.log(data);
        returnedData = data;
        status = 'Ok';
        message = 'posted';
    },(err)=>{
        console.log('In Error',err)
        status = 'Err';
        message = err;
    })
    console.log('In post method',{'data':returnedData,'status':status,'message':message});
    return {'data':returnedData,'status':status,'message':message};
} 

module.exports.update = async function(data,col){
    let conditions = { id: data['id'] }
        , update = data['update']
        , options = { multi: true };
        console.log('update',data);
    await eval(col).findByIdAndUpdate(data['id'],{$set:update} ,  (err,doc) => {
        console.log(err,doc);
        if (err) {
            status = 'Err ' + err
        }else {
            status = 'Ok'
            document = doc
        }

    });
    console.log('The document returned',document);
    return {'document':document,'status':status}
}