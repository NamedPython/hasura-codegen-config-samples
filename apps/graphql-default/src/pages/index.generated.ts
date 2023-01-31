import * as Types from '../graphql/types';

import { gql } from '@urql/core';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Latest10PostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type Latest10PostsQuery = { __typename?: 'query_root', post: Array<{ __typename?: 'Post', slug: string, title: string, author: { __typename?: 'People', id: any, labelName?: string | null }, likesAggregate: { __typename?: 'PostLikedAggregate', aggregate?: { __typename?: 'PostLikedAggregateFields', count: number } | null } }> };


export const Latest10PostsDocument = gql`
    query latest10Posts {
  post(limit: 10, orderBy: {publishedAt: DESC_NULLS_LAST}, offset: 0) {
    slug
    title
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

export function useLatest10PostsQuery(options?: Omit<Urql.UseQueryArgs<Latest10PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<Latest10PostsQuery, Latest10PostsQueryVariables>({ query: Latest10PostsDocument, ...options });
};