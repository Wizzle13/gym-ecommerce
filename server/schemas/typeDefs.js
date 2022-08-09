// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        id: ID
        username: String
        email: String
        trainer: String
        membership: String
    }

    type Trainer {
        trainerName: String
        fitness: []
    }

    type Membership {
        membershipName: String
        membershipType: []
    }

    enum FitnessProgram {
        Endurance
        Strength
        OverallHealth
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

    type Auth {
        token: ID!
        user: User
    }
`;



// export the typeDefs
module.exports = typeDefs;