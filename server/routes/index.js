"use strict"
const express = require("express");
const router = express.Router();
let finAsistance = require("../models/FinancialAs");
let SOS = require('../models/sos');
let NEWS = require('../models/news');
let Counselling = require('../models/counselling');
let Whistle_blow = require('../models/');


//this for getting data from the backend for financial assistance

router.get('/finance', (req, res)=>{
    finAsistance.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});
router.post('/add-finacialassistance', (req, res)=>{
    
    let finAsistanceData = new finAsistance(req.body);
    finAsistanceData.save()
    .then(finAsistanceData =>{
        res.status(200).json({'finAsistanceData ': 'Financial assistance Data  added successfully'})
    })
    .catch(err=>{
        res.status(400).send('your request for financial assistance was unseccesful');
    });
});
//this for getting data from the backend for counselling

router.get('/counselling', (req, res)=>{
    Counselling.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});
router.post('/counselling', (req, res)=>{
    
    let counsellingdata = new Counselling(req.body);
    counsellingdata.save()
    .then(sosdata =>{
        res.status(200).json({'counsellingdata': 'counselling Data  added successfully'})
    })
    .catch(err=>{
        res.status(400).send('your request for counselling was unseccesful');
    });
});

//this for getting data from the backend for new

router.get('/news', (req, res)=>{
    NEWS.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});
router.post('/news', (req, res)=>{
    
    let finAsistanceData = new finAsistance(req.body);
    NEWS.save()
    .then(finAsistanceData =>{
        res.status(200).json({'finAsistanceData ': 'Financial assistance Data  added successfully'})
    })
    .catch(err=>{
        res.status(400).send('your request for financial assistance was unseccesful');
    });
});


//this for getting data from the backend for whistle-blow

router.get('/whistle-blow', (req, res)=>{
    Whistle_blow.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});
router.post('/whistle-blow', (req, res)=>{
    
    let finAsistanceData = new finAsistance(req.body);
    Whistle_blow.save()
    .then(finAsistanceData =>{
        res.status(200).json({'finAsistanceData ': 'Financial assistance Data  added successfully'})
    })
    .catch(err=>{
        res.status(400).send('your request for financial assistance was unseccesful');
    });
});

//this for getting data from the backend for sos

router.get('/sos', (req, res)=>{
    SOS.find({}, (err, bookind_data)=>{
        if(err){
            console.log("err");

        }else{
            res.json(bookind_data);
        }
    })
});
router.post('/sos', (req, res)=>{
    
    let finAsistanceData = new finAsistance(req.body);
    SOS.save()
    .then(finAsistanceData =>{
        res.status(200).json({'finAsistanceData ': 'Financial assistance Data  added successfully'})
    })
    .catch(err=>{
        res.status(400).send('your request for financial assistance was unseccesful');
    });
});
module.exports = router;