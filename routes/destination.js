const express = require('express');
const router = express.Router();
const { Destination, Account } = require('../models');

router.post('/', async (req, res) => {

  const { accountId, url, httpMethod, headers } = req.body;
	
  try {
    const destination = await Destination.create({ AccountId: accountId, url, httpMethod, headers });
console.log("destination--------",destination)
    res.json(destination);
  } catch (err) {
console.log("error-----",err)
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const destinations = await Destination.findAll();
  res.json(destinations);
});

router.get('/account/:accountId', async (req, res) => {
  const destinations = await Destination.findAll({ where: { AccountId: req.params.accountId } });
  res.json(destinations);
});

router.put('/:id', async (req, res) => {
  const dest = await Destination.findByPk(req.params.id);
  if (!dest) return res.status(404).json({ error: 'Not found' });
  await dest.update(req.body);
  res.json(dest);
});

router.delete('/:id', async (req, res) => {
  const dest = await Destination.findByPk(req.params.id);
  if (!dest) return res.status(404).json({ error: 'Not found' });
  await dest.destroy();
  res.json({ message: 'Deleted' });
});

module.exports = router;

