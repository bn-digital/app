import introspection from '@/graphql';
import { isDevelopment, isProduction } from '@/utils/environment';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloError,
  NormalizedCacheObject,
  ApolloClientOptions,
  ApolloQueryResult,
  OperationVariables,
  QueryOptions,
} from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const makeApolloDefaultConfig = (): Partial<ApolloClientOptions<NormalizedCacheObject>> => ({
  connectToDevTools: isDevelopment,
  queryDeduplication: true,
  assumeImmutableResults: true,
});

export const { getClient: apolloRSC } = registerApolloClient(() => new ApolloClient({
  ...makeApolloDefaultConfig(),
  cache: new InMemoryCache({
    resultCaching: isProduction,
    possibleTypes: introspection.possibleTypes,
  }),
  link: new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: process.env.NEXT_PUBLIC_API_URL,
  }),
}));

export async function makeRscQuery<
  TResponse = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  options: QueryOptions<TVariables, TResponse>
): Promise<ApolloQueryResult<TResponse | undefined>> {
  try {
    return await apolloRSC().query<TResponse, TVariables>(options)
  } catch (error) {
    console.error('RSC QUERY FAILED!', error);

    return {
      data: undefined,
      networkStatus: 8,
      loading: false,
      error: error as ApolloError,
    };
  }
}