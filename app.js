require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/accounts', require('./routes/account'));
app.use('/destinations', require('./routes/destination'));
app.use('/', require('./routes/dataHandler'));

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server running on http://localhost:${PORT}`);
});

