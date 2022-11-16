# create-apollo-error
smart helper to create errors for apollo server >=v4

## Usage

```TS
import { createApolloError } from '@codaline-io/create-apollo-error'

throw createApolloError(message, optionalErrorCode, optionalErrorType, optionalGraphQLErrorOptions)
```

- optionalErrorCode?: string | null -> graphqlError.extensions.code
- optionalErrorType?: string | null -> graphqlError.extensions.type
- optionalGraphQLErrorOptions?: GraphQLErrorOptions, e.g. setting original error and so on
