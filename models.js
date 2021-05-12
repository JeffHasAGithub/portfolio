const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://b7f50f9ef0bcb0:1e6886f1@us-cdbr-east-03.cleardb.com/heroku_08df9e65f98d751?reconnect=true');

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
