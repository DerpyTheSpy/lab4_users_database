const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/UserRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://derpythespy:2231663@cluster0.4dp6azc.mongodb.net/lab4_users_database?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log(err)
  });
  
  app.use(UserRoutes);
  
  app.listen(3000, () => { console.log('Server is running...') });