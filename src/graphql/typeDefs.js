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
  
  input CarFilter {
    brandName: String
    modelName: String
  }
  
  enum SortOrder {
    ASC
    DESC
  }

  type Query {
    getCars(filter: CarFilter, sortBy: String, sortOrder: SortOrder): [CarModel!]!
    getCarById(id: Int!): CarModel
  }
`;

module.exports = typeDefs;
