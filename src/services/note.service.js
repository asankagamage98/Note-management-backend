const Note = require("../models/note.model");

const getById = async (id) => {
  try {
    return await Note.findById(id);
  } catch (err) {
    throw err;
  }
};

const create = async (data) => {
  try {
    return await new Note(data).save();
  } catch (err) {
    throw err;
  }
};

const update = async (id, data) => {
  try {
    return await Note.findByIdAndUpdate(id, data);
  } catch (err) {
    throw err;
  }
};

const remove = async (id) => {
  try {
    return await Note.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getById,
  create,
  update,
  remove,
};
