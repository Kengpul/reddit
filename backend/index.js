if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/reddit';
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});


app.get('/', (req, res) => {
    res.json({ 'name': 'paul' });
})

app.listen(3000, () => {
    console.log('Listening of Port 3000');
})
