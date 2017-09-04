// Iteration #1

const mongoose = require('mongoose');

const DroneModel = require('../models/drone.js');

mongoose.connect('mongodb://localhost/drones-dev');

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

DroneModel.create(
  //1st argument -> array of products to save
  droneData,

  //2nd argument -> callback
  (err, dronesAfterSave) => {
    //check for errors
    if(err){
      console.log('Create error ^^;');
      console.log(err);
      return;
    }
    //show success feedback
    dronesAfterSave.forEach((oneDrone) => {
        console.log('Drone---> ' + oneDrone.droneName );
    });
  }
); //close DroneModel.create(...
