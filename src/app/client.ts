import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj5ge0gopwze40127slnlghfv',
        opts: {
            credentials: 'same-origin',
        },
    }),
});

export function provideClient(): ApolloClient {
    return client;
}
