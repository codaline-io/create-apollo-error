# create-apollo-error
smart helper to create errors for apollo server >=v4

## Usage

```TS
import { createApolloError } from '@codaline-io/create-apollo-error'

throw createApolloError(message, optionalCode)
```