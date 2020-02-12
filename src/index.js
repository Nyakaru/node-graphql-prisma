const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('../src/resolvers/Query')
const Mutation = require('../src/resolvers/Mutation')
const Link = require('../src/resolvers/Link')
const User = require('../src/resolvers/User')
const Subscription = require('../src/resolvers/Subscription')

const resolvers = {
  Query,
  Link,
  User,
  Mutation,
  Subscription
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    }
})

server.start(() => console.log('Up and running'));
