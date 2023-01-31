import * as Types from '../graphql/types';

import { gql } from '@urql/core';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type My10PostsEachQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type My10PostsEachQuery = { __typename?: 'query_root', post: Array<{ __typename?: 'post', slug: string, title: string, publish_at?: any | null, published_at?: any | null, author: { __typename?: 'people', id: any, label_name?: string | null }, likes_aggregate: { __typename?: 'post_liked_aggregate', aggregate?: { __typename?: 'post_liked_aggregate_fields', count: number } | null } }> };


export const My10PostsEachDocument = gql`
    query my10PostsEach {
  post(limit: 10, order_by: {published_at: desc_nulls_last}, offset: 0) {
    slug
    title
    publish_at
    published_at
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

export function useMy10PostsEachQuery(options?: Omit<Urql.UseQueryArgs<My10PostsEachQueryVariables>, 'query'>) {
  return Urql.useQuery<My10PostsEachQuery, My10PostsEachQueryVariables>({ query: My10PostsEachDocument, ...options });
};