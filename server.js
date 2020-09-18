const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
//const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const Exercise = require('./models/Exercise.js');
const Workout = require('./models/Workout.js');
const User = require('./models/User.js');
//const Shoe = require('./models/Shoe.js')

const app = express();

const PORT = 4500;

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


//const maxAge = 1000 * 60 * 60 * 2;

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: false,
  /*cookie: {
    maxAge: maxAge,
    sameSite: true
  },*/
  //store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig.js')(passport);


/*
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

  const newWorkoutExercise = {
    exercise: pressUps._id,
    reps: 10,
    sets: 3,
    weight: 'body weight'
  }

  bigArms.exercises.push(newWorkoutExercise);
  terry.workouts.push(bigArms);

  const newUser = await terry.save();
  console.log(newUser)

  res.send('yes');
});

app.get('/terry', async (req, res, next) => {
  const terry = await User.findOne({ username: "Terry" }).populate({
    path: 'workouts.exercises.exercise',
    model: 'Exercise'
  });

  console.log(terry.workouts);
  res.send('Yo');
});

app.post('/new-exercise', (req, res, next) => {
  console.log(req.body);
  res.send({message: 'Boom baby'});
});
*/

app.post('/register', (req, res, next) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if(err) throw err;
    if(doc) return res.send({ message: 'User already exists' });
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hash
    });
    await newUser.save();
    res.send({ message: 'New user created' });
  });
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) throw err;
    if(!user) return res.send({ message: 'No user exists' });
    req.logIn(user, err => {
      if(err) throw err;
      res.send({ message: 'Successfully authenticated' });
      console.log(req.user);
    })
  })(req, res, next);
});

app.get('/get-user', (req, res, next) => {
  console.log(req.user);
  res.send({ user: req.user.username });
});


app.listen(PORT, () => console.log('Server listening on port ' + PORT));