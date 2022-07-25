const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  // If there aren't any comments initialize empty array
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content, status: 'pending' });
  commentsByPostId[req.params.id] = comments;

  // Send the event to the event bus
  await axios.post('http://event-bus-clusterip-srv:4005/events', {
    type: 'CommentCreated',
    data: { id: commentId, content, postId: req.params.id, status: 'pending' }
  });

  res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
  console.log('Recieved Event', req.body.type);

  const { type, data } = req.body;
  if (type === 'CommentModerated') {
    const { id, content, postId, status } = data;
    const comments = commentsByPostId[postId];

    // The comment we need to update
    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    // Send the comment updated event
    await axios.post('http://event-bus-clusterip-srv:4005/events', {
      type: 'CommentUpdated',
      data: { id, content, postId, status }
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
