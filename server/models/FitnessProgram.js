const { Schema, model } = require('mongoose');

const fitnessProgramSchema = new Schema(
    {
        endurance: {
            type: Schema.Types.ObjectId,
            ref: "endurance",
            required: true
        },
        strength: {
            type: Schema.Types.ObjectId,
            ref: "strength",
            required: true
        },
        overallHealth: {
            type: Schema.Types.ObjectId,
            ref: "overall health",
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)


const Fitness = model('Fitness', fitnessProgramSchema);

module.exports = Fitness;