const models = require('../models');
const User = models.user;

exports.create = async (user) => {
  return await User.create(user);
}

exports.findAll = async (opts) => {
  return await User.findAll(opts);
}

exports.findByPk = async (id) => {
  return await User.findByPk(id);
}

exports.findOne = async (opts) => {
  return await User.findOne(opts);
}

exports.update = async (vals, opts) => {
  return await User.update(vals, opts);
}

exports.destroy = async(opts) => {
  return await User.destroy(opts);
}
