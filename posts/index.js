const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (_req, res) => {
  res.send(posts);
});

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };

  // Send the event to the event bus
  await axios.post('http://event-bus-clusterip-srv:4005/events', {
    type: 'PostCreated',
    data: { id, title }
  });

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Recieved Event', req.body.type);
  res.send({});
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
