const models = require('../models');
const Project = models.Project;

exports.create = async (project) => {
  return await Project.create(project);
}

exports.findAll = async (opts) => {
  return await Project.findAll({ where: opts });
}

exports.findByPk = async (id) => {
  return await Project.findByPk(id);
}

exports.findOne = async (opts) => {
  return await Project.findOne({ where: opts });
}

exports.update = async (vals, opts) => {
  return await Project.update(vals, opts);
}

exports.destroy = async (opts) => {
  return await Project.destroy(opts);
}

