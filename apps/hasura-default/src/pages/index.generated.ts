import * as Types from '../graphql/types';

import { gql } from '@urql/core';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Latest10PostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Latest10PostsQuery = { __typename?: 'query_root', post: Array<{ __typename?: 'post', slug: string, title: string, author: { __typename?: 'people', id: any, label_name?: string | null }, likes_aggregate: { __typename?: 'post_liked_aggregate', aggregate?: { __typename?: 'post_liked_aggregate_fields', count: number } | null } }> };


export const Latest10PostsDocument = gql`
    query latest10Posts {
  post(limit: 10, order_by: {published_at: desc_nulls_last}, offset: 0) {
    slug
    title
    author {
      id
      label_name
    }
    likes_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

export function useLatest10PostsQuery(options?: Omit<Urql.UseQueryArgs<Latest10PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<Latest10PostsQuery, Latest10PostsQueryVariables>({ query: Latest10PostsDocument, ...options });
};