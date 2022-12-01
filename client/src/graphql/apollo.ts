import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_API,
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
