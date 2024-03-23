const Note = require('../models/note.model')
const NoteService = require('../services/note.service')

// Define controller functions
// Retrieves all notes 
const getAll = async (req, res) => {
    try {
        const { search, sortBy } = req.query

        const searchCriteria = {}
        if (search) {
            searchCriteria.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ]
        }

        let sortCriteria = {}
        if (sortBy) {
            const [field, order] = sortBy.split(':')
            sortCriteria[field] = order === 'desc' ? -1 : 1
        }

        const note = await Note.find(searchCriteria).sort(sortCriteria)
        res.status(200).json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}

// Retrieves note by its ID 
const getById = async (req, res) => {
    try {
        const note = await NoteService.getById(req.params.id)
        res.status(200).json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}
// Create new note 
const create = async (req, res) => {
    try {
        const note = await NoteService.create(req.body)
        res.status(200).json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}

//update notes
const update = async (req, res) => {
    try {
        const note = await NoteService.update(req.params.id, req.body)
        res.status(200).json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}

//remove note
const remove = async (req, res) => {
    try {
        const note = await NoteService.remove(req.params.id)
        res.status(200).json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}
