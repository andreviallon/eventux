const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const events = require('./routes/events');
const teachers = require('./routes/teachers');
const venues = require('./routes/venues');
const app = express();

app.use(express.json());
app.use('/api/v1/events', events);
app.use('/api/v1/teachers', teachers);
app.use('/api/v1/venues', venues);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'event-app')));
}

app.use(express.static(path.join(__dirname, './client/dist/event-app')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'event-app', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
