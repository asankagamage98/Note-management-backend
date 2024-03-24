// Import the controller functions 
const { getAll, create, update, remove, getById } = require('../controllers/note.controller')

// Import the Express Router
const router = require('express').Router()

// Define routes 
router.get('/', getAll)           // retrieving all notes
router.get('/:id', getById)       // retrieving a single note by ID
router.post('/', create)          // creating a new note
router.put('/:id', update)        // updating an existing note by ID
router.delete('/:id', remove)     // deleting a note by ID


module.exports = router
