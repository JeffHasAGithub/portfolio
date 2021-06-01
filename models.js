const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
  }
);

sequelize.sync();

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  github: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoincrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

module.exports =  { Project, User };
