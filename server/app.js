const express = require('express');
const app = express();
const port = 3000;
app.post('/register', (req, res) => {
  const { email, password } = req.body;

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({
    access_token
  });
});

  res.status(200).json({
    email,
    password
  });
});
app.listen(port, () => {
  console.log('app listening on port ', port);
})