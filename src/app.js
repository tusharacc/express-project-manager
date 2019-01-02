const express = require('express');
const bodyParser = require('body-parser')
const db = require('./database');

const app = express();

app.use(bodyParser.json())

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods',"GET, POST, OPTIONS");
    next()
})

app.post('/api/users/add',(req,res,next) => {
    db.post(req.body,'User')
    .then((data)=>{
        console.log('Before returning',data)
        res.status(200).json(data);
    })
    .catch((err)=>{
    res.status(404).json(err);
    });
});

app.post('/api/users/update',(req,res,next) => {
    db.update(req.body,'User')
    .then((data)=>{
        console.log('Before returning',data)
    res.status(200).json(data);
    })
    .catch((err)=>{
    res.status(404).json(err);
    });
});

app.post('/api/projects/add',(req,res,next) => {
    db.post(req.body,'Project')
    .then((data)=>{
        console.log('Before returning',data)
    res.status(200).json(data);
    })
    .catch((err)=>{
    res.status(404).json(err);
    });
});

app.post('/api/projects/update',(req,res,next) => {
    db.update(req.body,'Project')
    .then((data)=>{
        console.log('Before returning',data)
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(404).json(err);
    });
});

app.post('/api/tasks/add',(req,res,next) => {
    db.post(req.body,'Task')
    .then((data)=>{
        console.log('Before returning',data)
    res.status(200).json(data);
    })
    .catch((err)=>{
    res.status(404).json(err);
    });
});

app.post('/api/tasks/update',(req,res,next) => {
    db.update(req.body,'Task')
    .then((data)=>{
        console.log('Before returning',data)
    res.status(200).json(data);
    })
    .catch((err)=>{
    res.status(404).json(err);
    });
});

app.get('/api/users',(req,res,next) => {

    db.get('User')
    .then((data) => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(404).json(err);
    });
});

app.get('/api/projects',(req,res,next) => {
    db.get('Project')
    .then((data) => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(404).json(err);
    });
});

app.get('/api/tasks',(req,res,next) => {
    db.get('Task')
    .then((data) => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(404).json(err);
    });
});

module.exports = app;