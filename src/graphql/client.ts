import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://staging-dot-bagy-api.appspot.com/graphql'

const client = new GraphQLClient(endpoint)

export default client
