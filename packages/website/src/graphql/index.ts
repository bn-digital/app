import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

      export type PossibleTypesResultData = {
  "possibleTypes": {
    "GenericMorph": [
      "ComponentDataEntry",
      "ComponentDataSet",
      "ContentReleasesRelease",
      "ContentReleasesReleaseAction",
      "StaticPage",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser"
    ]
  }
};
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "GenericMorph": [
      "ComponentDataEntry",
      "ComponentDataSet",
      "ContentReleasesRelease",
      "ContentReleasesReleaseAction",
      "StaticPage",
      "UploadFile",
      "UploadFolder",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsUser"
    ]
  }
};
      export default result;
    
export const EntryFragmentDoc = gql`
    fragment Entry on ComponentDataEntry {
  id
  key
  value
}
    `;
export const FileFragmentDoc = gql`
    fragment File on UploadFileEntity {
  id
  attributes {
    previewUrl
    alternativeText
    url
  }
}
    `;
export const StaticPageFragmentDoc = gql`
    fragment StaticPage on StaticPage {
  slug
  title
}
    `;
export const MeDocument = gql`
    query me {
  me {
    id
  }
}
    `;
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const StaticPageDocument = gql`
    query staticPage($slug: String!) {
  staticPages(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        title
      }
    }
  }
}
    `;
export function useStaticPageQuery(baseOptions: Apollo.QueryHookOptions<StaticPageQuery, StaticPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaticPageQuery, StaticPageQueryVariables>(StaticPageDocument, options);
      }
export function useStaticPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaticPageQuery, StaticPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaticPageQuery, StaticPageQueryVariables>(StaticPageDocument, options);
        }
export function useStaticPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StaticPageQuery, StaticPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StaticPageQuery, StaticPageQueryVariables>(StaticPageDocument, options);
        }
export type StaticPageQueryHookResult = ReturnType<typeof useStaticPageQuery>;
export type StaticPageLazyQueryHookResult = ReturnType<typeof useStaticPageLazyQuery>;
export type StaticPageSuspenseQueryHookResult = ReturnType<typeof useStaticPageSuspenseQuery>;
export type StaticPageQueryResult = Apollo.QueryResult<StaticPageQuery, StaticPageQueryVariables>;