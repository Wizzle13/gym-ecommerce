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
    }
)

module.exports = Membership;