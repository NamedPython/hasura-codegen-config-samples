import { CodegenConfig } from "@graphql-codegen/cli";
import { Types } from "@graphql-codegen/plugin-helpers/typings";

// 環境変数からエンドポイントやシークレットを注入
const hasuraSchema = (
  endpoint = process.env.HASURA_GRAPHQL_ENDPOINT,
  secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET
): Types.UrlSchemaWithOptions => {
  const hasuraSchemaEndpoint = `${endpoint}/v1/graphql`;
  const schemaObj: Types.UrlSchemaWithOptions = {};

  console.log(`-- read schema from: ${hasuraSchemaEndpoint}`);

  schemaObj[hasuraSchemaEndpoint] = {
    headers: {
      "x-hasura-admin-secret": secret || ""
    },
  };

  return schemaObj;
};

const config: CodegenConfig = {
  config: {
    skipTypename: false,
    withHooks: true,
    withHOC: false,
    withComponent: false,
    gqlImport: "@urql/core#gql",
  },
  generates: {
    "./src/graphql/types.ts": {
      plugins: ["typescript"],
      schema: [hasuraSchema()],
    },
    "./src/": {
      documents: ["src/**/*.gql", "!src/pages/my/**/*.gql"],
      schema: [hasuraSchema()],
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "graphql/types.ts",
      },
      plugins: ["typescript-operations", "typescript-urql"],
    },
    "./src/pages/my/": {
      documents: "src/pages/my/**/*.gql",
      schema: [hasuraSchema()],
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "graphql/types.ts",
      },
      plugins: ["typescript-operations", "typescript-urql"],
    },
  },
};

export default config;
