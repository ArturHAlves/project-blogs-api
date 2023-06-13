const CategoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await CategoryService.createCategory({ name });

    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await CategoryService.getAll();

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

module.exports = { createCategory, getAll };
