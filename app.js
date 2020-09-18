const express = require('express');
//const session = require('express-session');
const mongoose = require('mongoose');
//const MongoStore = require('connect-mongo')(session);

const Exercise = require('./models/Exercise.js');
const Workout = require('./models/Workout.js');
const User = require('./models/User.js');
//const Shoe = require('./models/Shoe.js')

const app = express();

const PORT = 3000;

// db connection
const db = 'mongodb://superuser:5uperStrongM0ng@localhost/workout_planner?authSource=admin';

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

/*
const maxAge = 1000 * 60 * 60 * 2;

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: maxAge,
    sameSite: true
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
*/

app.get('/', (req, res, next) => {
  res.send('Hi');
});

app.get('/new-user', async (req, res, next) => {
  const terry = new User({
    _id: new mongoose.Types.ObjectId(),
    username: 'Terry',
    password: 'password1'
  });

  const bigArms = new Workout({
    _id: new mongoose.Types.ObjectId(),
    name: 'Big Arms',
    duration: 60,
    type: 'Upper body'
  });

  const pressUps = new Exercise({
    _id: new mongoose.Types.ObjectId(),
    name: 'Press ups',
    description: 'Lay on the ground belly down, place your hands underneath your shoulders and push your body up until arms are fully extended.',
    muscleGroup: 'Chest',
    owner: terry._id
  });

  const newExercise = await pressUps.save();

  bigArms.exercises.push(pressUps._id);
  terry.workouts.push(bigArms);

  const newUser = await terry.save();
  console.log(newUser)

  res.send('yes');
});

app.get('/terry', async (req, res, next) => {
  const terry = await User.findOne({ username: "Terry" }).populate({
    path: 'workouts.exercises',
    model: 'Exercise'
  });

  console.log(terry.workouts);
  res.send('Yo');
});


app.listen(PORT, () => console.log('Server listening on port ' + PORT));