// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {}

    type Query {}

    type Mutation {}
`;


// export the typeDefs
module.exports = typeDefs;