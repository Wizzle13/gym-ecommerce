const { Schema, model } = require('mongoose');

const membershipSchema = new Schema(
    {
        membershipName: {
            type: String,
            required: true
        },
        membershipType: {
            type: String,
            enum: ['Standard', 'Plus', 'Unlimited'],
            default: 'Standard'
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

const Membership = model('Membership', membershipSchema);

module.exports = Membership;