import { GraphQLError, GraphQLErrorOptions} from 'graphql'

export const createApolloError = (message: string, code?: string | null, type?: string | null, options: GraphQLErrorOptions = {}) => {
  return new GraphQLError(message, {
    ...options,
    extensions: {
      code: code || undefined,
      type: type || undefined,
      ...options.extensions || {},
    }
  })
}