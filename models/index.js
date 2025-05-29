const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false,
});

const Account = require('./account')(sequelize);
const Destination = require('./destination')(sequelize);

Account.hasMany(Destination, { onDelete: 'CASCADE' });
Destination.belongsTo(Account);

sequelize.sync();

module.exports = { sequelize, Account, Destination };

