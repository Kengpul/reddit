if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ExpressError = require('./utils/ExpressError');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/reddit';
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.use(express.json());

app.use('/', userRoutes);
app.use('/post', postRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
})

app.use((error, req, res, next) => {
    const { statusCode = 500 } = error;
    if (!error.message) error.message = 'Something Went Wrong!';
    res.status(statusCode).json({ error });
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
