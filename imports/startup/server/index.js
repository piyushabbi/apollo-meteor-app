import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

// Type Definations
const typeDefs = `
  type Query {
    hi: String
  }
`;

// Resolver Obj
const resolvers = {
  Query: {
    hi() {
      return "Hello Piyush!";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({schema});