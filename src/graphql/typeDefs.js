const { gql } = require('graphql-tag');

const typeDefs = gql`
  type CarModel {
    id: Int!
    brandName: String!
    modelName: String!
    fuelType: String!
    bodyType: String!
    purchaseCount: Int!
  }

  type Query {
    getCars: [CarModel!]!
  }
`;

module.exports = typeDefs;
