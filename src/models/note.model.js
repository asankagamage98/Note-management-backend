const { Schema, default: mongoose } = require('mongoose')

// Define the schema for a note
const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)
// Create a model based on the schema
const Note = mongoose.model('Note', noteSchema)
module.exports = Note
