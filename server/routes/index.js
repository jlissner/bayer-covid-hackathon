const path = require('path');
const express = require('express');
const R = require('r-script');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/heart-rate', (req, res) => {
  R(path.resolve('./server/r/heartrate.R'))
    .call({}, (err, data) => {
      if (err) {
        res.status(500).send(err);

        return;
      }

      res.send(data);
    });
});

router.get('/pulse-rate', (req, res) => {
  R(path.resolve('./server/r/pulserate.R'))
    .call({}, (err, data) => {
      if (err) {
        res.send(err);

        return;
      }

      res.send(data);
    });
});

router.get('/respiratory-rate', (req, res) => {
  R(path.resolve('./server/r/respiratoryRate.R'))
    .call({}, (err, data) => {
      if (err) {
        res.status(500).send(err);

        return;
      }

      res.send(data);
    });
});

module.exports = router;
