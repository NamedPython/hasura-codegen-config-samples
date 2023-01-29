export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "people" */
export type People = {
  __typename?: 'People';
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  labelName?: Maybe<Scalars['String']>;
  /** An array relationship */
  likedPosts: Array<PostLiked>;
  /** An aggregate relationship */
  likedPostsAggregate: PostLikedAggregate;
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  postsAggregate: PostAggregate;
  readableId: Scalars['String'];
  tagLine: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "people" */
export type PeopleLikedPostsArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


/** columns and relationships of "people" */
export type PeopleLikedPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


/** columns and relationships of "people" */
export type PeoplePostsArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


/** columns and relationships of "people" */
export type PeoplePostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

/** aggregated selection of "people" */
export type PeopleAggregate = {
  __typename?: 'PeopleAggregate';
  aggregate?: Maybe<PeopleAggregateFields>;
  nodes: Array<People>;
};

/** aggregate fields of "people" */
export type PeopleAggregateFields = {
  __typename?: 'PeopleAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PeopleMaxFields>;
  min?: Maybe<PeopleMinFields>;
};


/** aggregate fields of "people" */
export type PeopleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PeopleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "people". All fields are combined with a logical 'AND'. */
export type PeopleBoolExp = {
  _and?: InputMaybe<Array<PeopleBoolExp>>;
  _not?: InputMaybe<PeopleBoolExp>;
  _or?: InputMaybe<Array<PeopleBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  labelName?: InputMaybe<StringComparisonExp>;
  likedPosts?: InputMaybe<PostLikedBoolExp>;
  likedPosts_aggregate?: InputMaybe<Post_Liked_Aggregate_Bool_Exp>;
  posts?: InputMaybe<PostBoolExp>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  readableId?: InputMaybe<StringComparisonExp>;
  tagLine?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "people" */
export enum PeopleConstraint {
  /** unique or primary key constraint on columns "id" */
  PeoplePkey = 'people_pkey',
  /** unique or primary key constraint on columns "readable_id", "tag_line" */
  PeopleReadableIdTagLineKey = 'people_readable_id_tag_line_key'
}

/** input type for inserting data into table "people" */
export type PeopleInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  labelName?: InputMaybe<Scalars['String']>;
  likedPosts?: InputMaybe<PostLikedArrRelInsertInput>;
  posts?: InputMaybe<PostArrRelInsertInput>;
  readableId?: InputMaybe<Scalars['String']>;
  tagLine?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PeopleMaxFields = {
  __typename?: 'PeopleMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelName?: Maybe<Scalars['String']>;
  readableId?: Maybe<Scalars['String']>;
  tagLine?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type PeopleMinFields = {
  __typename?: 'PeopleMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelName?: Maybe<Scalars['String']>;
  readableId?: Maybe<Scalars['String']>;
  tagLine?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "people" */
export type PeopleMutationResponse = {
  __typename?: 'PeopleMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<People>;
};

/** input type for inserting object relation for remote table "people" */
export type PeopleObjRelInsertInput = {
  data: PeopleInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PeopleOnConflict>;
};

/** on_conflict condition type for table "people" */
export type PeopleOnConflict = {
  constraint: PeopleConstraint;
  update_columns?: Array<PeopleUpdateColumn>;
  where?: InputMaybe<PeopleBoolExp>;
};

/** Ordering options when selecting data from "people". */
export type PeopleOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  labelName?: InputMaybe<OrderBy>;
  likedPostsAggregate?: InputMaybe<PostLikedAggregateOrderBy>;
  postsAggregate?: InputMaybe<PostAggregateOrderBy>;
  readableId?: InputMaybe<OrderBy>;
  tagLine?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: people */
export type PeoplePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "people" */
export enum PeopleSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LabelName = 'labelName',
  /** column name */
  ReadableId = 'readableId',
  /** column name */
  TagLine = 'tagLine',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "people" */
export type PeopleSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  labelName?: InputMaybe<Scalars['String']>;
  readableId?: InputMaybe<Scalars['String']>;
  tagLine?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "people" */
export type PeopleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PeopleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PeopleStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  labelName?: InputMaybe<Scalars['String']>;
  readableId?: InputMaybe<Scalars['String']>;
  tagLine?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "people" */
export enum PeopleUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LabelName = 'labelName',
  /** column name */
  ReadableId = 'readableId',
  /** column name */
  TagLine = 'tagLine',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PeopleUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PeopleSetInput>;
  /** filter the rows which have to be updated */
  where: PeopleBoolExp;
};

/** columns and relationships of "post" */
export type Post = {
  __typename?: 'Post';
  /** An object relationship */
  author: People;
  authorId: Scalars['uuid'];
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  likes: Array<PostLiked>;
  /** An aggregate relationship */
  likesAggregate: PostLikedAggregate;
  publishAt?: Maybe<Scalars['timestamptz']>;
  publishedAt?: Maybe<Scalars['timestamptz']>;
  slug: Scalars['String'];
  /** An object relationship */
  status: PostStatus;
  statusKey: PostStatusEnum;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "post" */
export type PostLikesArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


/** columns and relationships of "post" */
export type PostLikesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};

/** aggregated selection of "post" */
export type PostAggregate = {
  __typename?: 'PostAggregate';
  aggregate?: Maybe<PostAggregateFields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type PostAggregateFields = {
  __typename?: 'PostAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PostMaxFields>;
  min?: Maybe<PostMinFields>;
};


/** aggregate fields of "post" */
export type PostAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post" */
export type PostAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post" */
export type PostArrRelInsertInput = {
  data: Array<PostInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PostOnConflict>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type PostBoolExp = {
  _and?: InputMaybe<Array<PostBoolExp>>;
  _not?: InputMaybe<PostBoolExp>;
  _or?: InputMaybe<Array<PostBoolExp>>;
  author?: InputMaybe<PeopleBoolExp>;
  authorId?: InputMaybe<UuidComparisonExp>;
  body?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  likes?: InputMaybe<PostLikedBoolExp>;
  likes_aggregate?: InputMaybe<Post_Liked_Aggregate_Bool_Exp>;
  publishAt?: InputMaybe<TimestamptzComparisonExp>;
  publishedAt?: InputMaybe<TimestamptzComparisonExp>;
  slug?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<PostStatusBoolExp>;
  statusKey?: InputMaybe<PostStatusEnumComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "post" */
export enum PostConstraint {
  /** unique or primary key constraint on columns "slug", "author_id" */
  PostAuthorIdSlugKey = 'post_author_id_slug_key',
  /** unique or primary key constraint on columns "id" */
  PostPkey = 'post_pkey'
}

/** input type for inserting data into table "post" */
export type PostInsertInput = {
  author?: InputMaybe<PeopleObjRelInsertInput>;
  authorId?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  likes?: InputMaybe<PostLikedArrRelInsertInput>;
  publishAt?: InputMaybe<Scalars['timestamptz']>;
  publishedAt?: InputMaybe<Scalars['timestamptz']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PostStatusObjRelInsertInput>;
  statusKey?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "post_liked" */
export type PostLiked = {
  __typename?: 'PostLiked';
  likedAt: Scalars['timestamptz'];
  /** An object relationship */
  people: People;
  peopleId: Scalars['uuid'];
  /** An object relationship */
  post: Post;
  postId: Scalars['uuid'];
};

/** aggregated selection of "post_liked" */
export type PostLikedAggregate = {
  __typename?: 'PostLikedAggregate';
  aggregate?: Maybe<PostLikedAggregateFields>;
  nodes: Array<PostLiked>;
};

/** aggregate fields of "post_liked" */
export type PostLikedAggregateFields = {
  __typename?: 'PostLikedAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PostLikedMaxFields>;
  min?: Maybe<PostLikedMinFields>;
};


/** aggregate fields of "post_liked" */
export type PostLikedAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostLikedSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_liked" */
export type PostLikedAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Post_Liked_Max_Order_By>;
  min?: InputMaybe<Post_Liked_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post_liked" */
export type PostLikedArrRelInsertInput = {
  data: Array<PostLikedInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PostLikedOnConflict>;
};

/** Boolean expression to filter rows from the table "post_liked". All fields are combined with a logical 'AND'. */
export type PostLikedBoolExp = {
  _and?: InputMaybe<Array<PostLikedBoolExp>>;
  _not?: InputMaybe<PostLikedBoolExp>;
  _or?: InputMaybe<Array<PostLikedBoolExp>>;
  likedAt?: InputMaybe<TimestamptzComparisonExp>;
  people?: InputMaybe<PeopleBoolExp>;
  peopleId?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostBoolExp>;
  postId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "post_liked" */
export enum PostLikedConstraint {
  /** unique or primary key constraint on columns "people_id", "post_id" */
  PostLikedPkey = 'post_liked_pkey'
}

/** input type for inserting data into table "post_liked" */
export type PostLikedInsertInput = {
  likedAt?: InputMaybe<Scalars['timestamptz']>;
  people?: InputMaybe<PeopleObjRelInsertInput>;
  peopleId?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostObjRelInsertInput>;
  postId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PostLikedMaxFields = {
  __typename?: 'PostLikedMaxFields';
  likedAt?: Maybe<Scalars['timestamptz']>;
  peopleId?: Maybe<Scalars['uuid']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type PostLikedMinFields = {
  __typename?: 'PostLikedMinFields';
  likedAt?: Maybe<Scalars['timestamptz']>;
  peopleId?: Maybe<Scalars['uuid']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "post_liked" */
export type PostLikedMutationResponse = {
  __typename?: 'PostLikedMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostLiked>;
};

/** on_conflict condition type for table "post_liked" */
export type PostLikedOnConflict = {
  constraint: PostLikedConstraint;
  update_columns?: Array<PostLikedUpdateColumn>;
  where?: InputMaybe<PostLikedBoolExp>;
};

/** Ordering options when selecting data from "post_liked". */
export type PostLikedOrderBy = {
  likedAt?: InputMaybe<OrderBy>;
  people?: InputMaybe<PeopleOrderBy>;
  peopleId?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostOrderBy>;
  postId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_liked */
export type PostLikedPkColumnsInput = {
  peopleId: Scalars['uuid'];
  postId: Scalars['uuid'];
};

/** select columns of table "post_liked" */
export enum PostLikedSelectColumn {
  /** column name */
  LikedAt = 'likedAt',
  /** column name */
  PeopleId = 'peopleId',
  /** column name */
  PostId = 'postId'
}

/** input type for updating data in table "post_liked" */
export type PostLikedSetInput = {
  likedAt?: InputMaybe<Scalars['timestamptz']>;
  peopleId?: InputMaybe<Scalars['uuid']>;
  postId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "post_liked" */
export type PostLikedStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PostLikedStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostLikedStreamCursorValueInput = {
  likedAt?: InputMaybe<Scalars['timestamptz']>;
  peopleId?: InputMaybe<Scalars['uuid']>;
  postId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "post_liked" */
export enum PostLikedUpdateColumn {
  /** column name */
  LikedAt = 'likedAt',
  /** column name */
  PeopleId = 'peopleId',
  /** column name */
  PostId = 'postId'
}

export type PostLikedUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostLikedSetInput>;
  /** filter the rows which have to be updated */
  where: PostLikedBoolExp;
};

/** aggregate max on columns */
export type PostMaxFields = {
  __typename?: 'PostMaxFields';
  authorId?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publishAt?: Maybe<Scalars['timestamptz']>;
  publishedAt?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type PostMinFields = {
  __typename?: 'PostMinFields';
  authorId?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publishAt?: Maybe<Scalars['timestamptz']>;
  publishedAt?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "post" */
export type PostMutationResponse = {
  __typename?: 'PostMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type PostObjRelInsertInput = {
  data: PostInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PostOnConflict>;
};

/** on_conflict condition type for table "post" */
export type PostOnConflict = {
  constraint: PostConstraint;
  update_columns?: Array<PostUpdateColumn>;
  where?: InputMaybe<PostBoolExp>;
};

/** Ordering options when selecting data from "post". */
export type PostOrderBy = {
  author?: InputMaybe<PeopleOrderBy>;
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  likesAggregate?: InputMaybe<PostLikedAggregateOrderBy>;
  publishAt?: InputMaybe<OrderBy>;
  publishedAt?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  status?: InputMaybe<PostStatusOrderBy>;
  statusKey?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post */
export type PostPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "post" */
export enum PostSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PublishAt = 'publishAt',
  /** column name */
  PublishedAt = 'publishedAt',
  /** column name */
  Slug = 'slug',
  /** column name */
  StatusKey = 'statusKey',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "post" */
export type PostSetInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  publishAt?: InputMaybe<Scalars['timestamptz']>;
  publishedAt?: InputMaybe<Scalars['timestamptz']>;
  slug?: InputMaybe<Scalars['String']>;
  statusKey?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "post_status" */
export type PostStatus = {
  __typename?: 'PostStatus';
  key: Scalars['String'];
  label: Scalars['String'];
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  postsAggregate: PostAggregate;
};


/** columns and relationships of "post_status" */
export type PostStatusPostsArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


/** columns and relationships of "post_status" */
export type PostStatusPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

/** aggregated selection of "post_status" */
export type PostStatusAggregate = {
  __typename?: 'PostStatusAggregate';
  aggregate?: Maybe<PostStatusAggregateFields>;
  nodes: Array<PostStatus>;
};

/** aggregate fields of "post_status" */
export type PostStatusAggregateFields = {
  __typename?: 'PostStatusAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<PostStatusMaxFields>;
  min?: Maybe<PostStatusMinFields>;
};


/** aggregate fields of "post_status" */
export type PostStatusAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_status". All fields are combined with a logical 'AND'. */
export type PostStatusBoolExp = {
  _and?: InputMaybe<Array<PostStatusBoolExp>>;
  _not?: InputMaybe<PostStatusBoolExp>;
  _or?: InputMaybe<Array<PostStatusBoolExp>>;
  key?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  posts?: InputMaybe<PostBoolExp>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "post_status" */
export enum PostStatusConstraint {
  /** unique or primary key constraint on columns "key" */
  PostStatusPkey = 'post_status_pkey'
}

export enum PostStatusEnum {
  /** 下書き */
  Draft = 'DRAFT',
  /** 公開済み */
  Published = 'PUBLISHED',
  /** 公開予約済み */
  PublishScheduled = 'PUBLISH_SCHEDULED'
}

/** Boolean expression to compare columns of type "PostStatusEnum". All fields are combined with logical 'AND'. */
export type PostStatusEnumComparisonExp = {
  _eq?: InputMaybe<PostStatusEnum>;
  _in?: InputMaybe<Array<PostStatusEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<PostStatusEnum>;
  _nin?: InputMaybe<Array<PostStatusEnum>>;
};

/** input type for inserting data into table "post_status" */
export type PostStatusInsertInput = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostArrRelInsertInput>;
};

/** aggregate max on columns */
export type PostStatusMaxFields = {
  __typename?: 'PostStatusMaxFields';
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostStatusMinFields = {
  __typename?: 'PostStatusMinFields';
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_status" */
export type PostStatusMutationResponse = {
  __typename?: 'PostStatusMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostStatus>;
};

/** input type for inserting object relation for remote table "post_status" */
export type PostStatusObjRelInsertInput = {
  data: PostStatusInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PostStatusOnConflict>;
};

/** on_conflict condition type for table "post_status" */
export type PostStatusOnConflict = {
  constraint: PostStatusConstraint;
  update_columns?: Array<PostStatusUpdateColumn>;
  where?: InputMaybe<PostStatusBoolExp>;
};

/** Ordering options when selecting data from "post_status". */
export type PostStatusOrderBy = {
  key?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  postsAggregate?: InputMaybe<PostAggregateOrderBy>;
};

/** primary key columns input for table: post_status */
export type PostStatusPkColumnsInput = {
  key: Scalars['String'];
};

/** select columns of table "post_status" */
export enum PostStatusSelectColumn {
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "post_status" */
export type PostStatusSetInput = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "post_status" */
export type PostStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PostStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostStatusStreamCursorValueInput = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** update columns of table "post_status" */
export enum PostStatusUpdateColumn {
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label'
}

export type PostStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostStatusSetInput>;
  /** filter the rows which have to be updated */
  where: PostStatusBoolExp;
};

/** Streaming cursor of the table "post" */
export type PostStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PostStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostStreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  publishAt?: InputMaybe<Scalars['timestamptz']>;
  publishedAt?: InputMaybe<Scalars['timestamptz']>;
  slug?: InputMaybe<Scalars['String']>;
  statusKey?: InputMaybe<PostStatusEnum>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "post" */
export enum PostUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PublishAt = 'publishAt',
  /** column name */
  PublishedAt = 'publishedAt',
  /** column name */
  Slug = 'slug',
  /** column name */
  StatusKey = 'statusKey',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PostUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostSetInput>;
  /** filter the rows which have to be updated */
  where: PostBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "people" */
  deletePeople?: Maybe<PeopleMutationResponse>;
  /** delete single row from the table: "people" */
  deletePeopleByPk?: Maybe<People>;
  /** delete data from the table: "post" */
  deletePost?: Maybe<PostMutationResponse>;
  /** delete single row from the table: "post" */
  deletePostByPk?: Maybe<Post>;
  /** delete data from the table: "post_liked" */
  deletePostLiked?: Maybe<PostLikedMutationResponse>;
  /** delete single row from the table: "post_liked" */
  deletePostLikedByPk?: Maybe<PostLiked>;
  /** delete data from the table: "post_status" */
  deletePostStatus?: Maybe<PostStatusMutationResponse>;
  /** delete single row from the table: "post_status" */
  deletePostStatusByPk?: Maybe<PostStatus>;
  /** insert data into the table: "people" */
  insertPeople?: Maybe<PeopleMutationResponse>;
  /** insert a single row into the table: "people" */
  insertPeopleOne?: Maybe<People>;
  /** insert data into the table: "post" */
  insertPost?: Maybe<PostMutationResponse>;
  /** insert data into the table: "post_liked" */
  insertPostLiked?: Maybe<PostLikedMutationResponse>;
  /** insert a single row into the table: "post_liked" */
  insertPostLikedOne?: Maybe<PostLiked>;
  /** insert a single row into the table: "post" */
  insertPostOne?: Maybe<Post>;
  /** insert data into the table: "post_status" */
  insertPostStatus?: Maybe<PostStatusMutationResponse>;
  /** insert a single row into the table: "post_status" */
  insertPostStatusOne?: Maybe<PostStatus>;
  /** update data of the table: "people" */
  updatePeople?: Maybe<PeopleMutationResponse>;
  /** update single row of the table: "people" */
  updatePeopleByPk?: Maybe<People>;
  /** update multiples rows of table: "people" */
  updatePeopleMany?: Maybe<Array<Maybe<PeopleMutationResponse>>>;
  /** update data of the table: "post" */
  updatePost?: Maybe<PostMutationResponse>;
  /** update single row of the table: "post" */
  updatePostByPk?: Maybe<Post>;
  /** update data of the table: "post_liked" */
  updatePostLiked?: Maybe<PostLikedMutationResponse>;
  /** update single row of the table: "post_liked" */
  updatePostLikedByPk?: Maybe<PostLiked>;
  /** update multiples rows of table: "post_liked" */
  updatePostLikedMany?: Maybe<Array<Maybe<PostLikedMutationResponse>>>;
  /** update multiples rows of table: "post" */
  updatePostMany?: Maybe<Array<Maybe<PostMutationResponse>>>;
  /** update data of the table: "post_status" */
  updatePostStatus?: Maybe<PostStatusMutationResponse>;
  /** update single row of the table: "post_status" */
  updatePostStatusByPk?: Maybe<PostStatus>;
  /** update multiples rows of table: "post_status" */
  updatePostStatusMany?: Maybe<Array<Maybe<PostStatusMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeletePeopleArgs = {
  where: PeopleBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePeopleByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePostArgs = {
  where: PostBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePostByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePostLikedArgs = {
  where: PostLikedBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePostLikedByPkArgs = {
  peopleId: Scalars['uuid'];
  postId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePostStatusArgs = {
  where: PostStatusBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePostStatusByPkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertPeopleArgs = {
  objects: Array<PeopleInsertInput>;
  onConflict?: InputMaybe<PeopleOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPeopleOneArgs = {
  object: PeopleInsertInput;
  onConflict?: InputMaybe<PeopleOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostArgs = {
  objects: Array<PostInsertInput>;
  onConflict?: InputMaybe<PostOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostLikedArgs = {
  objects: Array<PostLikedInsertInput>;
  onConflict?: InputMaybe<PostLikedOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostLikedOneArgs = {
  object: PostLikedInsertInput;
  onConflict?: InputMaybe<PostLikedOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostOneArgs = {
  object: PostInsertInput;
  onConflict?: InputMaybe<PostOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostStatusArgs = {
  objects: Array<PostStatusInsertInput>;
  onConflict?: InputMaybe<PostStatusOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostStatusOneArgs = {
  object: PostStatusInsertInput;
  onConflict?: InputMaybe<PostStatusOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdatePeopleArgs = {
  _set?: InputMaybe<PeopleSetInput>;
  where: PeopleBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePeopleByPkArgs = {
  _set?: InputMaybe<PeopleSetInput>;
  pk_columns: PeoplePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePeopleManyArgs = {
  updates: Array<PeopleUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePostArgs = {
  _set?: InputMaybe<PostSetInput>;
  where: PostBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePostByPkArgs = {
  _set?: InputMaybe<PostSetInput>;
  pk_columns: PostPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePostLikedArgs = {
  _set?: InputMaybe<PostLikedSetInput>;
  where: PostLikedBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePostLikedByPkArgs = {
  _set?: InputMaybe<PostLikedSetInput>;
  pk_columns: PostLikedPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePostLikedManyArgs = {
  updates: Array<PostLikedUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePostManyArgs = {
  updates: Array<PostUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePostStatusArgs = {
  _set?: InputMaybe<PostStatusSetInput>;
  where: PostStatusBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePostStatusByPkArgs = {
  _set?: InputMaybe<PostStatusSetInput>;
  pk_columns: PostStatusPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePostStatusManyArgs = {
  updates: Array<PostStatusUpdates>;
};

export type Post_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Aggregate_Bool_Exp_Count>;
};

export type Post_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PostSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PostBoolExp>;
  predicate: IntComparisonExp;
};

export type Post_Liked_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Liked_Aggregate_Bool_Exp_Count>;
};

export type Post_Liked_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PostLikedSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PostLikedBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "post_liked" */
export type Post_Liked_Max_Order_By = {
  likedAt?: InputMaybe<OrderBy>;
  peopleId?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "post_liked" */
export type Post_Liked_Min_Order_By = {
  likedAt?: InputMaybe<OrderBy>;
  peopleId?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  publishAt?: InputMaybe<OrderBy>;
  publishedAt?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  publishAt?: InputMaybe<OrderBy>;
  publishedAt?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  peopleAggregate: PeopleAggregate;
  /** fetch data from the table: "people" using primary key columns */
  peopleByPk?: Maybe<People>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  postAggregate: PostAggregate;
  /** fetch data from the table: "post" using primary key columns */
  postByPk?: Maybe<Post>;
  /** fetch data from the table: "post_liked" */
  postLiked: Array<PostLiked>;
  /** fetch aggregated fields from the table: "post_liked" */
  postLikedAggregate: PostLikedAggregate;
  /** fetch data from the table: "post_liked" using primary key columns */
  postLikedByPk?: Maybe<PostLiked>;
  /** fetch data from the table: "post_status" */
  postStatus: Array<PostStatus>;
  /** fetch aggregated fields from the table: "post_status" */
  postStatusAggregate: PostStatusAggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  postStatusByPk?: Maybe<PostStatus>;
};


export type Query_RootPeopleArgs = {
  distinctOn?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type Query_RootPeopleAggregateArgs = {
  distinctOn?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type Query_RootPeopleByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type Query_RootPostAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type Query_RootPostByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostLikedArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type Query_RootPostLikedAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type Query_RootPostLikedByPkArgs = {
  peopleId: Scalars['uuid'];
  postId: Scalars['uuid'];
};


export type Query_RootPostStatusArgs = {
  distinctOn?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type Query_RootPostStatusAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type Query_RootPostStatusByPkArgs = {
  key: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  peopleAggregate: PeopleAggregate;
  /** fetch data from the table: "people" using primary key columns */
  peopleByPk?: Maybe<People>;
  /** fetch data from the table in a streaming manner: "people" */
  peopleStream: Array<People>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  postAggregate: PostAggregate;
  /** fetch data from the table: "post" using primary key columns */
  postByPk?: Maybe<Post>;
  /** fetch data from the table: "post_liked" */
  postLiked: Array<PostLiked>;
  /** fetch aggregated fields from the table: "post_liked" */
  postLikedAggregate: PostLikedAggregate;
  /** fetch data from the table: "post_liked" using primary key columns */
  postLikedByPk?: Maybe<PostLiked>;
  /** fetch data from the table in a streaming manner: "post_liked" */
  postLikedStream: Array<PostLiked>;
  /** fetch data from the table: "post_status" */
  postStatus: Array<PostStatus>;
  /** fetch aggregated fields from the table: "post_status" */
  postStatusAggregate: PostStatusAggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  postStatusByPk?: Maybe<PostStatus>;
  /** fetch data from the table in a streaming manner: "post_status" */
  postStatusStream: Array<PostStatus>;
  /** fetch data from the table in a streaming manner: "post" */
  postStream: Array<Post>;
};


export type Subscription_RootPeopleArgs = {
  distinctOn?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type Subscription_RootPeopleAggregateArgs = {
  distinctOn?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type Subscription_RootPeopleByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPeopleStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PeopleStreamCursorInput>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type Subscription_RootPostArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type Subscription_RootPostAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type Subscription_RootPostByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPostLikedArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type Subscription_RootPostLikedAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type Subscription_RootPostLikedByPkArgs = {
  peopleId: Scalars['uuid'];
  postId: Scalars['uuid'];
};


export type Subscription_RootPostLikedStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PostLikedStreamCursorInput>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type Subscription_RootPostStatusArgs = {
  distinctOn?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type Subscription_RootPostStatusAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type Subscription_RootPostStatusByPkArgs = {
  key: Scalars['String'];
};


export type Subscription_RootPostStatusStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PostStatusStreamCursorInput>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type Subscription_RootPostStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PostStreamCursorInput>>;
  where?: InputMaybe<PostBoolExp>;
};
