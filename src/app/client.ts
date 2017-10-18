import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj7vqcm6j004i01560ilw1emr',
        opts: {
            credentials: 'same-origin',
        },
    }),
});

export function provideClient(): ApolloClient {
    return client;
}
