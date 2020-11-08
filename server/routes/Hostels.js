"use strict"
const express = require("express");
const router = express.Router();
let Hostels = require("../models/Hostels");

router.get('/', (req, res)=>{
    Roout.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
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
        res.status(400).send('Hostel adding was unseccesful');
    });
});

module.exports= router;