const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database is connected... (:'))
    .catch((err) => console.log('Database not connected... :(', err));

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/authRoutes'));
app.use('/user', require('./routes/userRoutes'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

