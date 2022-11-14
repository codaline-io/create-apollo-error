import { GraphQLError} from 'graphql'

export const createApolloError = (message: string, code?: string | null) => {
  return new GraphQLError(message, {
    extensions: {
      code
    }
  })
}