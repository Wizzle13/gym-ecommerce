const { Schema, model } = require('mongoose');
const fitnessProgramSchema = require('./FitnessProgram');

const trainerSchema = new Schema(
    {
        trainerName: {
            type: String,
            required: true
        },
        fitness: [
            {
                endidRef: { type: Schema.Types.ObjectId, ref: "endurance" },
                stridRef: { type: Schema.Types.ObjectId, ref: "strength" },
                overfitidRef: { type: Schema.Types.ObjectId, ref: "overallHealth" }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)


const Trainer = model('Trainer', trainerSchema);

module.exports = Trainer;