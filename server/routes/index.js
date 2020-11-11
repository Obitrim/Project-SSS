"use strict"
const express = require("express");
const router = express.Router();
let finAsistance = require("../models/FinancialAs");

router.post('/A', (req, res)=>{
   
});

router.post('/add-finacialassistance', (req, res)=>{
    
    let finAsistanceData = new finAsistance(req.body);
    finAsistanceData .save()
    .then(finAsistanceData =>{
        res.status(200).json({'finAsistanceData ': 'Financial assistance Data  added successfully'})
    })
    .catch(err=>{
        res.status(400).send('your request for financial assistance was unseccesful');
    });
});

module.exports = router;