import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  // ...
  schema: ['https://beta.pokeapi.co/graphql/v1beta'],
  generates: {
    'src/schema.graphql': {
      plugins: ['schema-ast']
    }
  }
}
export default config