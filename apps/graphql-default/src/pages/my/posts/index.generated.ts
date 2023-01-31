import * as Types from '../graphql/types';

import { gql } from '@urql/core';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type My10PostsEachQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type My10PostsEachQuery = { __typename?: 'query_root', post: Array<{ __typename?: 'Post', slug: string, title: string, publishAt?: any | null, publishedAt?: any | null, author: { __typename?: 'People', id: any, labelName?: string | null }, likesAggregate: { __typename?: 'PostLikedAggregate', aggregate?: { __typename?: 'PostLikedAggregateFields', count: number } | null } }> };


export const My10PostsEachDocument = gql`
    query my10PostsEach {
  post(limit: 10, orderBy: {publishedAt: DESC_NULLS_LAST}, offset: 0) {
    slug
    title
    publishAt
    publishedAt
    author {
      id
      labelName
    }
    likesAggregate {
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