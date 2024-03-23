const Note = require("../models/note.model")


// Define controller functions

// Retrieves all notes from the database
const getAll = async (req, res) => {
    try {
        const { search, sortBy } = req.query;

        const searchCriteria = {};
        if (search) {
            searchCriteria.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } }
            ];
        }

        let sortCriteria = {};
        if (sortBy) {
            const [field, order] = sortBy.split(':');
            sortCriteria[field] = order === 'desc' ? -1 : 1;
        }

        const note = await Note.find(searchCriteria).sort(sortCriteria);
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Retrieves a single note by its ID from the database
const getById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Create a new note based on the request body
const create = async (req, res) => {
    try {
        const note  = await new Note(req.body).save();
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}

//Update Note
const update = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}

//Remove the note from the database
const remove = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Search for notes
const search = async (req, res) => {
    try {
        const note = await Note.find(req.body)
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    getAll,
    getById,
    search,
    create,
    update,
    remove
}