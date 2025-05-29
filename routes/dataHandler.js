const express = require('express');
const axios = require('axios');
const router = express.Router();
const { Account, Destination } = require('../models');

router.post('/server/incoming_data', async (req, res) => {
  const token = req.headers['cl-x-token'];
  const data = req.body;

  if (!token) return res.status(401).json({ message: 'Un Authenticate' });

  const account = await Account.findOne({ where: { appSecretToken: token } });
  if (!account) return res.status(401).json({ message: 'Un Authenticate' });

  const destinations = await Destination.findAll({ where: { AccountId: account.id } });

  for (const dest of destinations) {
    try {
      const config = {
        method: dest.httpMethod.toLowerCase(),
        url: dest.url,
        headers: dest.headers,
      };

      if (dest.httpMethod.toUpperCase() === 'GET') {
        config.params = data;
      } else {
        config.data = data;
      }

      await axios(config);
    } catch (err) {
      console.error(`Failed to send to ${dest.url}:`, err.message);
    }
  }

  res.json({ message: 'Data forwarded to destinations' });
});

module.exports = router;

