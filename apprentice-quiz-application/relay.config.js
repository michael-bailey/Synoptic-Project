module.exports = {
  src: './apps/client',
  schema: './graphql/schema.gql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  extensions: ['ts', 'tsx'],
  language: 'typescript',
  artifactDirectory: 'apps/client/__generated__/queries',
};
