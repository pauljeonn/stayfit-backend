const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const exerciseRoute = require('./routes/exercises');
const authRoute = require('./routes/auth');

dotenv.config();

const app = express();
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Connected to MongoDB.'))
	.catch((err) => console.log(err));

// Middleware
app.use(express.json()); // request body JSON 변환

app.use('/api/exercises', exerciseRoute);
app.use('/api/auth', authRoute);

app.listen(4000, () => {
	console.log('Backend server is running.');
});
