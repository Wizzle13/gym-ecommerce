const { Schema, model } = require('mongoose');

const trainerSchema = new Schema(
    {
        trainerName: {
            type: String,
            required: true
        },
        workoutPackage: {
            type: String,
            enum: ['Endurance', 'Strength', 'Overall Health'],
            default: 'Overall Health'
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

const Trainer = model('Trainer', trainerSchema);

module.exports = Trainer;