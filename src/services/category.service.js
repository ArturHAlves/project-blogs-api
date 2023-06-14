const { Category } = require('../models');

const createCategory = async ({ name }) => Category.create({ name });

const getAll = async () => Category.findAll();

const getById = async (categoryId) =>
  Category.findAll({ where: { id: categoryId } });

module.exports = { createCategory, getAll, getById };
