
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

const User = require('./User.js');
const Post = require('./Post.js');

db.User = User;
db.Post = Post;

User.init(sequelize);
Post.init(sequelize);
  
User.associate(db);
Post.associate(db);

module.exports = db;
