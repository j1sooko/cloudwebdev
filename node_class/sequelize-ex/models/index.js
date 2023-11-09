const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);;

db.sequelize = sequelize;

const Student = require('./Student.js');
const Car = require('./Car.js');
const Book = require('./Book.js');

db.Student = Student;
db.Car = Car;
db.Book = Book;

Student.init(sequelize);
Car.init(sequelize);
Book.init(sequelize);
  
Student.associate(db);
Car.associate(db);
Book.associate(db);
module.exports = db;
