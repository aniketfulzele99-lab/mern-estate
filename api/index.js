import express from 'express'
import mongoose from 'mongoose';
import userRouter  from './routes/user.route.js'
import authRouter from './routes/auth.route.js'


      //  const mongoose = require('mongoose');

        const dbURI = 'mongodb://127.0.0.1:27017/meanstate'; // Replace 'your_database_name'

        mongoose.connect(dbURI)
          .then(() => console.log('MongoDB connected successfully'))
          .catch(err => console.error('MongoDB connection error:', err));


const app = express();

app.use(express.json());


app.listen(3000, () => {
    console.log('server is running on port 3000');
}
);

app.use('/api/user', userRouter)
app.use ('/api/auth',authRouter)