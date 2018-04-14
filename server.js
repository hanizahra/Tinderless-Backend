const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'Dev';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Jurassic Park is back online!');
});
const DatingApp = require('./routes/DatingApp-router');
app.use('/api/DatingApp', DatingApp);
app.use(logger('dev'));
app.use('*', (req, res) => {
  res.status(400).send(
    'This page does not exist.'
  );
});

app.listen(PORT, () => {
 console.log(`server is listening on port ${PORT}`);
})
console.log(`Developing on ${NODE_ENV} enironment`);
