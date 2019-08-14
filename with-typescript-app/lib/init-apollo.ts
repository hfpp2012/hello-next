import { isBrowser } from "./isBrowser";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink
} from "apollo-boost";
import fetch from "isomorphic-unfetch";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

if (!isBrowser) {
  (global as any).fetch = fetch;
}

function create(initialState: any) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== "undefined";
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: "http://localhost:5000/graphql", // Server URL (must be absolute)
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
