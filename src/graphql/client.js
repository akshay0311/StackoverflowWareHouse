import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://165.22.213.37:5000/graphql',
  cache: new InMemoryCache()
});
 