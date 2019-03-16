const graphQL = require('graphql')
const _ = require('lodash')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphQL

const UserType = new GraphQLObjectType ({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

const users = [
  { id: '01', firstName: 'Tom', age: 21 },
  { id: '02', firstName: 'Sarah', age: 23 }
]

const RootQuery = new GraphQLObjectType ({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        return _.find( users, { id: args.id })
      } 
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})