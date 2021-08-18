import { env } from "process";

export const REST_API_URL = env.REST_API_URL || 'http://localhost/api/';
export const GRAPHQL_API_URL = env.GRAPHQL_API_URL || 'http://localhost/api/graphql/';
