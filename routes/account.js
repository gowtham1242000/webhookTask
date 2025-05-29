const express = require('express');
const router = express.Router();
const { Account, Destination } = require('../models');

router.post('/', async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.json(account);
  } catch (err) {
console.log("error-----",err)
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const accounts = await Account.findAll();
  res.json(accounts);
});

router.get('/:id', async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Not found' });
  res.json(account);
});

router.put('/:id', async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Not found' });
  await account.update(req.body);
  res.json(account);
});

router.delete('/:id', async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Not found' });
  await account.destroy();
  res.json({ message: 'Deleted' });
});

module.exports = router;

