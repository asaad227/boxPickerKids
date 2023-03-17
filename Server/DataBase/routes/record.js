import express from 'express';
import pkg from 'mongodb';
const { ObjectId } = pkg;
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
import { getDb } from '../db/conn.js';

// This function will get a list of all the records.
recordRoutes.get('/game', async function (req, res) {
  const dbConnect = await getDb();
  await dbConnect
    .collection('users')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching game!');
      } else {
        res.json({
          success: true,
          payload: result,
        });
      }
    });
});

// This function will get all elements by ID
recordRoutes.get('/game/:id', async (req, res) => {
  const dbConnect = await getDb();
  const findById = await dbConnect
    .collection('users')
    .findOne({ _id: ObjectId(req.params.id) });

  if (findById) {
    res.json({
      success: true,
      payload: findById,
    });
  } else {
    res.json({
      success: false,
      payload: `No valid Id was found`,
    });
  }
});

recordRoutes.post('/game', async (req, res) => {
  const dbConnect = await getDb();
  const result = await dbConnect
    .collection('users')
    .insertOne(req.body);

  console.log(
    `newListing has been created with following id: ${result.insertedId}`
  );

  res.json({
    success: true,
    payload: result,
  });
});

// This section will help you delete a record.

// This function will delete the element by id
recordRoutes.delete('/game/delete/:id', async (req, res) => {
  const dbConnect = await getDb();
  const deleted = await dbConnect
    .collection('users')
    .deleteOne({ _id: ObjectId(req.params.id) });

  if (deleted) {
    res.json({
      success: true,
      payload: deleted,
    });
  } else {
    res.json({
      success: false,
      payload: `No valid Id was found`,
    });
  }
});

//// This function will update by ID

recordRoutes.patch('/game/update/:id', async (req, res) => {
  const dbConnect = await getDb();
  const updated = await dbConnect
    .collection('listingsAndReviews')
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });

  if (updated) {
    res.json({
      success: true,
      payload: updated,
    });
  } else {
    res.json({
      success: false,
      payload: `It was not updates`,
    });
  }
});

export default recordRoutes;
