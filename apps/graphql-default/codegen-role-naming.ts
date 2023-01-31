import { CodegenConfig } from "@graphql-codegen/cli";
import { Types } from "@graphql-codegen/plugin-helpers/typings";

// 環境変数からエンドポイントやシークレットを注入
const hasuraSchema = (
  role = "admin",
  endpoint = process.env.HASURA_GRAPHQL_ENDPOINT,
  secret = process.env.HASURA_GRAPHQL_ADMIN_SECRET
): Types.UrlSchemaWithOptions => {
  const hasuraSchemaEndpoint = `${endpoint}/v1/graphql`;
  const schemaObj: Types.UrlSchemaWithOptions = {};

  console.log(`-- read schema as ${role} from: ${hasuraSchemaEndpoint}`);

  schemaObj[hasuraSchemaEndpoint] = {
    headers: {
      "x-hasura-admin-secret": secret || "",
      "x-hasura-role": role,
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
    namingConvention: {
      transformUnderscore: true,
    },
  },
  generates: {
    "./src/graphql/types-naming.ts": {
      plugins: ["typescript"],
      schema: [hasuraSchema()],
    },
  },
};

export default config;
