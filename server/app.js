const express = require('express');
const { toUnicode } = require('punycode');
const app = express();
const port = 3000;
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({
    email,
    password
  });
});
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({
    email,
    password
  });
});


app.delete('/data/:id', (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(response => {
      console.log(response);
    })
})

app.listen(port, () => {
  console.log('app listening on port ', port);
})