
const express = require('express');
const router = express.Router();

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

router.get('/', (req, res) => {
  res.send(users);
});

module.exports = router;
