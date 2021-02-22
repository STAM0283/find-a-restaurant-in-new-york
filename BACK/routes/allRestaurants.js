const express = require('express');
const { MongoClient } = require('mongodb');

const url = process.env.URL;
const router = express.Router();

router.get('/', (_, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db('new_york');
    dbo.collection('restaurants').find({ 'grades.score': { $lt: 1, $not: { $gte: 1 } } }).toArray((error, result) => {
      if (error) throw error;
      res.send({
        status: 200,
        data: result,
      });
      db.close();
    });
  });
});

module.exports = router;
