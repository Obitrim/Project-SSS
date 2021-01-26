"use strict";
const express = require("express");
const router = express.Router();
let finAsistance = require("../models/FinancialAs");
let SOS = require("../models/sos");
let NEWS = require("../models/news");
let Counselling = require("../models/counselling");
let Whistle_blow = require("../models/");

//this for getting data from the backend for financial assistance

router.get("/finance", (req, res) => {
  finAsistance.find({}, (err, Finance_data) => {
    if (err) {
      console.log("err");
    } else {
      res.json(Finance_data);
    }
  });
});
router.post("/add-finacialassistance", (req, res) => {
  let finAsistanceData = new finAsistance(req.body);
  finAsistanceData
    .save()
    .then(() => {
      res
        .status(200)
        .json({
          "finAsistanceData ": "Financial assistance Data  added successfully",
        });
    })
    .catch((err) => {
      res
        .status(400)
        .send("your request for financial assistance was unseccesful");
    });
});
//this for getting data from the backend for counselling

router.get("/counselling", (req, res) => {
  Counselling.find({}, (err, counselling_data) => {
    if (err) {
      console.log("err");
    } else {
      res.json(counselling_data);
    }
  });
});
router.post("/counselling", (req, res) => {
  let counsellingdata = new Counselling(req.body);
  counsellingdata
    .save()
    .then(() => {
      res
        .status(200)
        .json({ counsellingdata: "counselling Data  added successfully" });
    })
    .catch((err) => {
      res.status(400).send("your request for counselling was unseccesful");
    });
});

//this for getting data from the backend for new

router.get("/news", (req, res) => {
  NEWS.find({}, (err, News_data) => {
    if (err) {
      console.log("err");
    } else {
      res.json(News_data);
    }
  });
});
router.post("/news", (req, res) => {
  let newsData = new NEWS(req.body);
  newsData
    .save()
    .then(() => {
      res.status(200).json({ "newData ": "News  added successfully" });
    })
    .catch((err) => {
      res.status(400).send("Adding news was unseccesful");
    });
});

//this for getting data from the backend for whistle-blow

router.get("/whistle-blow", (req, res) => {
  Whistle_blow.find({}, (err, whistle_data) => {
    if (err) {
      console.log("err");
    } else {
      res.json(whistle_data);
    }
  });
});
router.post("/whistle-blow", (req, res) => {
  let Whistle_blowData = new Whistle_blow(req.body);
  Whistle_blowData.save()
    .then(() => {
      res
        .status(200)
        .json({
          "Whistle_blowDaaData ": "Whistle blower  Data  added successfully",
        });
    })
    .catch((err) => {
      res.status(400).send("There was a problem adding whistle blower");
    });
});

//this for getting data from the backend for sos

router.get("/sos", (req, res) => {
  SOS.find({}, (err, sos_data) => {
    if (err) {
      console.log("err");
    } else {
      res.json(sos_data);
    }
  });
});
router.post("/sos", (req, res) => {
  let SosData = new SOS(req.body);
  SosData.save()
    .then(() => {
      res.status(200).json({ "SosData ": " Sos Data  added successfully" });
    })
    .catch((err) => {
      res.status(400).send("your request for Sos Data was unseccesful");
    });
});
module.exports = router;
