"use strict"
const express = require("express");
const router = express.Router();
let Hostels = require("../models/Hostels");

router.get('/', (req, res)=>{
    Hostels.find({}, (err, hostel_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(hostel_data);
        }
    })
});

router.get('/detail', (req, res)=>{
    Hostels.find({}, (err, hostel_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(hostel_data);
        }
    })
});

router.post('/add-hostel', (req, res)=>{
    
    let HostelData = new Hostels(req.body);
    HostelData.save()
    .then(HostelData=>{
        res.status(200).json({'HostelData': 'Hostel Data  added successfully'})
    })
    .catch(err=>{
        res.status(400).send('Adding Hostel data was unseccesful');
    });
});

module.exports= router;