const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  /* 
    In case a microservice will posibly be interrupted we store
    all the events data, so when the microservice is running again we send 
    the data to it, making posible something like changing the status in 
    the case it was the moderation service.
  */
  events.push(event);

  // Sends the event to each microservice
  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  }); // Posts
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  }); // Comments
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  }); // Query
  axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log(err.message);
  }); // Moderation

  res.send({ status: 'OK' });
});

app.get('/events', (_req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
