# Fitness Tracker Application

## Description

A fitness tracker application that allows the user to create, add to and post new workouts to MongoDB with mongoose. The user can entere either resistance training or cardio as workouts. From there, the user is able to add more details to the workout including weight, sets, repetitions, exercise duration, and the distance of and exercise. In addition, the user is able to add new workouts to any workout that is currently populated on the application. The applicaiton also allows users to analyze multiple graphic vuews of the different workouts they have completed in the applications dashboard.

## Demo

<img src="/DemoImgs/FitnessTrackerp17.gif?raw=true">

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)

## Installation

To install this application, first, create a directory on your local drive and clone the repo to your local machine. Then, you will need to install the node dependencies which can be done by running the npm install command in your terminal/bash shell.

After the dependencies have been installed, you will need to populate your MongoDB database by uncommenting the required seed file or by running NPM Run Seed. Once filled in, you can start the server and use the program

## Usage

Once everything has been installed, the application can be launched by running the command node server.js or npm start. The application will be run on  local host URL for the port that you have set up for this application. Once loaded in the browser, you can either click the dashboard page to view the
workout stats on the graphs provided or add/contnue a workout by clicking the buttons to add or update a new workout on the home page. When adding a new workout, ensure to click complete once you have filled everything in as if you click add exercise, then it will add a blank instance of a workout
with 0 for the numbers and no string for the title/name area.

## Credits

Dependencies:

-Express

-Mongoose

-Morgan

## Questions

- For any questions related to this applicaiton, please contact me at: clf9008@gmail.com

- Please use this link to access my Github Profile: [https://github.com/clf9008](https://github.com/clf9008)
