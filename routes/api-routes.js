//entereing a constant into global memory requiring models directory 
const db = require("../models");

//exporting the following function to our application 
module.exports = function (app) {
//populate the db with seed.js
    db.Workout.find({}).then(function (res) {
        console.log("Checking if db is populated");
        if (res.length === 0) {
            console.log("DB is empty");
            require("../seeders/seed.js");
        }
    });

    //app.get call to retrieve workouts from db
    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            //console.log("ALL WORKOUTS");
            //console.log(dbWorkout);
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;

            });

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    //app.put request to add new workouts to db
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });

    });

    //app.post funtionto to post new workouts to DB
    app.post("/api/workouts", ({ body }, res) => {
        // console.log("WORKOUT TO BE ADDED");
        // console.log(body);

        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });

    //app.get to get workouts in range
    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            //console.log("ALL WORKOUTS");
            //console.log(dbWorkout);

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });


}