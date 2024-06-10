'use client';

import type { ReactNode } from 'react';

import introspection from '@/graphql';
import { isProduction } from '@/utils/environment';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

export type ApolloProviderProps = {
  children: ReactNode
};

export function ApolloProvider({ children }: ApolloProviderProps) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

function makeClient() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your
    // page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: 'no-store' },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, {
    //    context: { fetchOptions: { cache: "force-cache" }}
    // });
  });

  const getLink = () => {
    if (typeof window !== 'undefined') {
      return httpLink;
    }

    return ApolloLink.from([
      new SSRMultipartLink({
        stripDefer: true,
      }),
      httpLink,
    ]);
  };

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache({
      resultCaching: isProduction,
      possibleTypes: introspection.possibleTypes,
    }),
    link: getLink(),
  });
}
