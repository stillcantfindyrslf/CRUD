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
  
  type CarSalesCount {
    modelName: String!
    totalSales: Int!
  }
  
  input CarFilter {
    brandName: String
    modelName: String
  }
  
  enum SortOrder {
    ASC
    DESC
  }
  
  input CreateCarInput {
    brandName: String!
    modelName: String!
    fuelType: String!
    bodyType: String!
    purchaseCount: Int
  }
  
  input UpdateCarInput {
    brandName: String
    modelName: String
    fuelType: String
    bodyType: String
    purchaseCount: Int
  }

  type Query {
    getCars(filter: CarFilter, sortBy: String, sortOrder: SortOrder): [CarModel!]!
    getCarById(id: Int!): CarModel
    getCarSalesCount(modelName: String!): CarSalesCount!
  }
  
  type Mutation {
    createAuto(input: CreateCarInput!): CarModel!
    updateAuto(id: Int!, input: UpdateCarInput!): CarModel!
    deleteAuto(id: Int!): Boolean!
  }
`;

module.exports = typeDefs;
