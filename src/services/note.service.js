// Import the Note model
const Note = require('../models/note.model')

//  retrieve a note by its ID
const getById = async (id) => {
    try {
        return await Note.findById(id)
    } catch (err) {
        throw err
    }
}

// create a new note
const create = async (data) => {
    try {
        return await new Note(data).save()
    } catch (err) {
        throw err
    }
}

// update an existing note by its ID
const update = async (id, data) => {
    try {
        return await Note.findByIdAndUpdate(id, data)
    } catch (err) {
        throw err
    }
}

// remove a note by its ID
const remove = async (id) => {
    try {
        return await Note.findByIdAndDelete(id)
    } catch (err) {
        throw err
    }
}

// functions for use in other files
module.exports = {
    getById,
    create,
    update,
    remove,
}
