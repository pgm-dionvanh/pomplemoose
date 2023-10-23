import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: "https://api.pomplemoose.online/graphql",
    cache: new InMemoryCache()
});