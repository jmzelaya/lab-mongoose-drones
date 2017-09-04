const express = require('express');

// require the Drone model here

const DroneModel = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
    DroneModel.find((err, allDrones) => {
      //If there's a database error... return to avoid showing the view
      if (err) {
          //Skip to the error handler middleware
          next(err);
          //if error ... shit
          return;
      }
      //do a find in the database
      //send the RESULTS to the view
      res.locals.drones = allDrones;

      res.render('drones/index.ejs');
    });//close ProductModel.find(..
});//close GET /products







router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new DroneModel({
    droneName: req.body.droneName,
    propellers: req.body.dronePropellor,
    maxSpeed: req.body.droneMaxSpeed
  });

  theDrone.save((err) => {
        if (err) {
            //Skip to the error handler middleware
            next(err);
            //if error ... shit
            return;
        }

        // res.render('product-views/product-form.ejs'); <--DON'T EVER DO THIS
        //if success.... yay! but also
        //     STEP #3 redirect  //
        // ALWAYS redirect after a successful to POST to avoid resubmitting/dublicates
        res.redirect('/drones');
        // you can only redirect to a URL
    });

});

module.exports = router;
