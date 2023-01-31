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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
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
  _is_null?: InputMaybe<Scalars['Boolean']>;
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

/** ordering argument of a cursor */
export const CursorOrdering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC'
} as const;

export type CursorOrdering = typeof CursorOrdering[keyof typeof CursorOrdering];
/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "post" */
  deletePost?: Maybe<PostMutationResponse>;
  /** delete single row from the table: "post" */
  deletePostByPk?: Maybe<Post>;
  /** delete data from the table: "people" */
  delete_people?: Maybe<PeopleMutationResponse>;
  /** delete single row from the table: "people" */
  delete_people_by_pk?: Maybe<People>;
  /** delete data from the table: "post_liked" */
  delete_post_liked?: Maybe<PostLikedMutationResponse>;
  /** delete single row from the table: "post_liked" */
  delete_post_liked_by_pk?: Maybe<PostLiked>;
  /** delete data from the table: "post_status" */
  delete_post_status?: Maybe<PostStatusMutationResponse>;
  /** delete single row from the table: "post_status" */
  delete_post_status_by_pk?: Maybe<PostStatus>;
  /** insert data into the table: "post" */
  insertPost?: Maybe<PostMutationResponse>;
  /** insert a single row into the table: "post" */
  insertPostOne?: Maybe<Post>;
  /** insert data into the table: "people" */
  insert_people?: Maybe<PeopleMutationResponse>;
  /** insert a single row into the table: "people" */
  insert_people_one?: Maybe<People>;
  /** insert data into the table: "post_liked" */
  insert_post_liked?: Maybe<PostLikedMutationResponse>;
  /** insert a single row into the table: "post_liked" */
  insert_post_liked_one?: Maybe<PostLiked>;
  /** insert data into the table: "post_status" */
  insert_post_status?: Maybe<PostStatusMutationResponse>;
  /** insert a single row into the table: "post_status" */
  insert_post_status_one?: Maybe<PostStatus>;
  /** update multiples rows of table: "post" */
  updateManyPost?: Maybe<Array<Maybe<PostMutationResponse>>>;
  /** update data of the table: "post" */
  updatePost?: Maybe<PostMutationResponse>;
  /** update single row of the table: "post" */
  updatePostByPk?: Maybe<Post>;
  /** update data of the table: "people" */
  update_people?: Maybe<PeopleMutationResponse>;
  /** update single row of the table: "people" */
  update_people_by_pk?: Maybe<People>;
  /** update multiples rows of table: "people" */
  update_people_many?: Maybe<Array<Maybe<PeopleMutationResponse>>>;
  /** update data of the table: "post_liked" */
  update_post_liked?: Maybe<PostLikedMutationResponse>;
  /** update single row of the table: "post_liked" */
  update_post_liked_by_pk?: Maybe<PostLiked>;
  /** update multiples rows of table: "post_liked" */
  update_post_liked_many?: Maybe<Array<Maybe<PostLikedMutationResponse>>>;
  /** update data of the table: "post_status" */
  update_post_status?: Maybe<PostStatusMutationResponse>;
  /** update single row of the table: "post_status" */
  update_post_status_by_pk?: Maybe<PostStatus>;
  /** update multiples rows of table: "post_status" */
  update_post_status_many?: Maybe<Array<Maybe<PostStatusMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeletePostArgs = {
  where: PostBoolExp;
};


/** mutation root */
export type MutationRootDeletePostByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePeopleArgs = {
  where: PeopleBoolExp;
};


/** mutation root */
export type MutationRootDeletePeopleByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostLikedArgs = {
  where: PostLikedBoolExp;
};


/** mutation root */
export type MutationRootDeletePostLikedByPkArgs = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostStatusArgs = {
  where: PostStatusBoolExp;
};


/** mutation root */
export type MutationRootDeletePostStatusByPkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertPostArgs = {
  objects: Array<PostInsertInput>;
  on_conflict?: InputMaybe<PostOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostOneArgs = {
  object: PostInsertInput;
  on_conflict?: InputMaybe<PostOnConflict>;
};


/** mutation root */
export type MutationRootInsertPeopleArgs = {
  objects: Array<PeopleInsertInput>;
  on_conflict?: InputMaybe<PeopleOnConflict>;
};


/** mutation root */
export type MutationRootInsertPeopleOneArgs = {
  object: PeopleInsertInput;
  on_conflict?: InputMaybe<PeopleOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostLikedArgs = {
  objects: Array<PostLikedInsertInput>;
  on_conflict?: InputMaybe<PostLikedOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostLikedOneArgs = {
  object: PostLikedInsertInput;
  on_conflict?: InputMaybe<PostLikedOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostStatusArgs = {
  objects: Array<PostStatusInsertInput>;
  on_conflict?: InputMaybe<PostStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostStatusOneArgs = {
  object: PostStatusInsertInput;
  on_conflict?: InputMaybe<PostStatusOnConflict>;
};


/** mutation root */
export type MutationRootUpdateManyPostArgs = {
  updates: Array<PostUpdates>;
};


/** mutation root */
export type MutationRootUpdatePostArgs = {
  _set?: InputMaybe<PostSetInput>;
  where: PostBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostByPkArgs = {
  _set?: InputMaybe<PostSetInput>;
  pk_columns: PostPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePeopleArgs = {
  _set?: InputMaybe<PeopleSetInput>;
  where: PeopleBoolExp;
};


/** mutation root */
export type MutationRootUpdatePeopleByPkArgs = {
  _set?: InputMaybe<PeopleSetInput>;
  pk_columns: PeoplePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePeopleManyArgs = {
  updates: Array<PeopleUpdates>;
};


/** mutation root */
export type MutationRootUpdatePostLikedArgs = {
  _set?: InputMaybe<PostLikedSetInput>;
  where: PostLikedBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostLikedByPkArgs = {
  _set?: InputMaybe<PostLikedSetInput>;
  pk_columns: PostLikedPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostLikedManyArgs = {
  updates: Array<PostLikedUpdates>;
};


/** mutation root */
export type MutationRootUpdatePostStatusArgs = {
  _set?: InputMaybe<PostStatusSetInput>;
  where: PostStatusBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostStatusByPkArgs = {
  _set?: InputMaybe<PostStatusSetInput>;
  pk_columns: PostStatusPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostStatusManyArgs = {
  updates: Array<PostStatusUpdates>;
};

/** column ordering options */
export const OrderBy = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last'
} as const;

export type OrderBy = typeof OrderBy[keyof typeof OrderBy];
/** columns and relationships of "people" */
export type People = {
  __typename?: 'people';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  labelName?: Maybe<Scalars['String']>;
  /** An array relationship */
  likedPosts: Array<PostLiked>;
  /** An aggregate relationship */
  likedPosts_aggregate: PostLikedAggregate;
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: PostAggregate;
  readable_id: Scalars['String'];
  tag_line: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "people" */
export type PeopleLikedPostsArgs = {
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


/** columns and relationships of "people" */
export type PeopleLikedPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


/** columns and relationships of "people" */
export type PeoplePostsArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


/** columns and relationships of "people" */
export type PeoplePostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

/** aggregated selection of "people" */
export type PeopleAggregate = {
  __typename?: 'people_aggregate';
  aggregate?: Maybe<PeopleAggregateFields>;
  nodes: Array<People>;
};

/** aggregate fields of "people" */
export type PeopleAggregateFields = {
  __typename?: 'people_aggregate_fields';
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
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  labelName?: InputMaybe<StringComparisonExp>;
  likedPosts?: InputMaybe<PostLikedBoolExp>;
  likedPosts_aggregate?: InputMaybe<PostLikedAggregateBoolExp>;
  posts?: InputMaybe<PostBoolExp>;
  posts_aggregate?: InputMaybe<PostAggregateBoolExp>;
  readable_id?: InputMaybe<StringComparisonExp>;
  tag_line?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "people" */
export const PeopleConstraint = {
  /** unique or primary key constraint on columns "id" */
  PeoplePkey: 'people_pkey',
  /** unique or primary key constraint on columns "readable_id", "tag_line" */
  PeopleReadableIdTagLineKey: 'people_readable_id_tag_line_key'
} as const;

export type PeopleConstraint = typeof PeopleConstraint[keyof typeof PeopleConstraint];
/** input type for inserting data into table "people" */
export type PeopleInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  labelName?: InputMaybe<Scalars['String']>;
  likedPosts?: InputMaybe<PostLikedArrRelInsertInput>;
  posts?: InputMaybe<PostArrRelInsertInput>;
  readable_id?: InputMaybe<Scalars['String']>;
  tag_line?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PeopleMaxFields = {
  __typename?: 'people_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelName?: Maybe<Scalars['String']>;
  readable_id?: Maybe<Scalars['String']>;
  tag_line?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type PeopleMinFields = {
  __typename?: 'people_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  labelName?: Maybe<Scalars['String']>;
  readable_id?: Maybe<Scalars['String']>;
  tag_line?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "people" */
export type PeopleMutationResponse = {
  __typename?: 'people_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<People>;
};

/** input type for inserting object relation for remote table "people" */
export type PeopleObjRelInsertInput = {
  data: PeopleInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PeopleOnConflict>;
};

/** on_conflict condition type for table "people" */
export type PeopleOnConflict = {
  constraint: PeopleConstraint;
  update_columns?: Array<PeopleUpdateColumn>;
  where?: InputMaybe<PeopleBoolExp>;
};

/** Ordering options when selecting data from "people". */
export type PeopleOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  labelName?: InputMaybe<OrderBy>;
  likedPosts_aggregate?: InputMaybe<PostLikedAggregateOrderBy>;
  posts_aggregate?: InputMaybe<PostAggregateOrderBy>;
  readable_id?: InputMaybe<OrderBy>;
  tag_line?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: people */
export type PeoplePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "people" */
export const PeopleSelectColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Email: 'email',
  /** column name */
  Id: 'id',
  /** column name */
  LabelName: 'labelName',
  /** column name */
  ReadableId: 'readable_id',
  /** column name */
  TagLine: 'tag_line',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type PeopleSelectColumn = typeof PeopleSelectColumn[keyof typeof PeopleSelectColumn];
/** input type for updating data in table "people" */
export type PeopleSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  labelName?: InputMaybe<Scalars['String']>;
  readable_id?: InputMaybe<Scalars['String']>;
  tag_line?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "people" */
export type PeopleStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PeopleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PeopleStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  labelName?: InputMaybe<Scalars['String']>;
  readable_id?: InputMaybe<Scalars['String']>;
  tag_line?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "people" */
export const PeopleUpdateColumn = {
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Email: 'email',
  /** column name */
  Id: 'id',
  /** column name */
  LabelName: 'labelName',
  /** column name */
  ReadableId: 'readable_id',
  /** column name */
  TagLine: 'tag_line',
  /** column name */
  UpdatedAt: 'updated_at'
} as const;

export type PeopleUpdateColumn = typeof PeopleUpdateColumn[keyof typeof PeopleUpdateColumn];
export type PeopleUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PeopleSetInput>;
  /** filter the rows which have to be updated */
  where: PeopleBoolExp;
};

/** columns and relationships of "post" */
export type Post = {
  __typename?: 'post';
  /** An object relationship */
  author: People;
  author_id: Scalars['uuid'];
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  likes: Array<PostLiked>;
  /** An aggregate relationship */
  likes_aggregate: PostLikedAggregate;
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
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


/** columns and relationships of "post" */
export type PostLikesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};

/** aggregated selection of "post" */
export type PostAggregate = {
  __typename?: 'post_aggregate';
  aggregate?: Maybe<PostAggregateFields>;
  nodes: Array<Post>;
};

export type PostAggregateBoolExp = {
  count?: InputMaybe<PostAggregateBoolExpCount>;
};

export type PostAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PostSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PostBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "post" */
export type PostAggregateFields = {
  __typename?: 'post_aggregate_fields';
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
  max?: InputMaybe<PostMaxOrderBy>;
  min?: InputMaybe<PostMinOrderBy>;
};

/** input type for inserting array relation for remote table "post" */
export type PostArrRelInsertInput = {
  data: Array<PostInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<PostOnConflict>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type PostBoolExp = {
  _and?: InputMaybe<Array<PostBoolExp>>;
  _not?: InputMaybe<PostBoolExp>;
  _or?: InputMaybe<Array<PostBoolExp>>;
  author?: InputMaybe<PeopleBoolExp>;
  author_id?: InputMaybe<UuidComparisonExp>;
  body?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  likes?: InputMaybe<PostLikedBoolExp>;
  likes_aggregate?: InputMaybe<PostLikedAggregateBoolExp>;
  publishAt?: InputMaybe<TimestamptzComparisonExp>;
  publishedAt?: InputMaybe<TimestamptzComparisonExp>;
  slug?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<PostStatusBoolExp>;
  statusKey?: InputMaybe<PostStatusEnumComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "post" */
export const PostConstraint = {
  /** unique or primary key constraint on columns "slug", "author_id" */
  PostAuthorIdSlugKey: 'post_author_id_slug_key',
  /** unique or primary key constraint on columns "id" */
  PostPkey: 'post_pkey'
} as const;

export type PostConstraint = typeof PostConstraint[keyof typeof PostConstraint];
/** input type for inserting data into table "post" */
export type PostInsertInput = {
  author?: InputMaybe<PeopleObjRelInsertInput>;
  author_id?: InputMaybe<Scalars['uuid']>;
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
  __typename?: 'post_liked';
  liked_at: Scalars['timestamptz'];
  /** An object relationship */
  people: People;
  people_id: Scalars['uuid'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['uuid'];
};

/** aggregated selection of "post_liked" */
export type PostLikedAggregate = {
  __typename?: 'post_liked_aggregate';
  aggregate?: Maybe<PostLikedAggregateFields>;
  nodes: Array<PostLiked>;
};

export type PostLikedAggregateBoolExp = {
  count?: InputMaybe<PostLikedAggregateBoolExpCount>;
};

export type PostLikedAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PostLikedSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PostLikedBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "post_liked" */
export type PostLikedAggregateFields = {
  __typename?: 'post_liked_aggregate_fields';
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
  max?: InputMaybe<PostLikedMaxOrderBy>;
  min?: InputMaybe<PostLikedMinOrderBy>;
};

/** input type for inserting array relation for remote table "post_liked" */
export type PostLikedArrRelInsertInput = {
  data: Array<PostLikedInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<PostLikedOnConflict>;
};

/** Boolean expression to filter rows from the table "post_liked". All fields are combined with a logical 'AND'. */
export type PostLikedBoolExp = {
  _and?: InputMaybe<Array<PostLikedBoolExp>>;
  _not?: InputMaybe<PostLikedBoolExp>;
  _or?: InputMaybe<Array<PostLikedBoolExp>>;
  liked_at?: InputMaybe<TimestamptzComparisonExp>;
  people?: InputMaybe<PeopleBoolExp>;
  people_id?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "post_liked" */
export const PostLikedConstraint = {
  /** unique or primary key constraint on columns "people_id", "post_id" */
  PostLikedPkey: 'post_liked_pkey'
} as const;

export type PostLikedConstraint = typeof PostLikedConstraint[keyof typeof PostLikedConstraint];
/** input type for inserting data into table "post_liked" */
export type PostLikedInsertInput = {
  liked_at?: InputMaybe<Scalars['timestamptz']>;
  people?: InputMaybe<PeopleObjRelInsertInput>;
  people_id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PostLikedMaxFields = {
  __typename?: 'post_liked_max_fields';
  liked_at?: Maybe<Scalars['timestamptz']>;
  people_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "post_liked" */
export type PostLikedMaxOrderBy = {
  liked_at?: InputMaybe<OrderBy>;
  people_id?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostLikedMinFields = {
  __typename?: 'post_liked_min_fields';
  liked_at?: Maybe<Scalars['timestamptz']>;
  people_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "post_liked" */
export type PostLikedMinOrderBy = {
  liked_at?: InputMaybe<OrderBy>;
  people_id?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "post_liked" */
export type PostLikedMutationResponse = {
  __typename?: 'post_liked_mutation_response';
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
  liked_at?: InputMaybe<OrderBy>;
  people?: InputMaybe<PeopleOrderBy>;
  people_id?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostOrderBy>;
  post_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_liked */
export type PostLikedPkColumnsInput = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};

/** select columns of table "post_liked" */
export const PostLikedSelectColumn = {
  /** column name */
  LikedAt: 'liked_at',
  /** column name */
  PeopleId: 'people_id',
  /** column name */
  PostId: 'post_id'
} as const;

export type PostLikedSelectColumn = typeof PostLikedSelectColumn[keyof typeof PostLikedSelectColumn];
/** input type for updating data in table "post_liked" */
export type PostLikedSetInput = {
  liked_at?: InputMaybe<Scalars['timestamptz']>;
  people_id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "post_liked" */
export type PostLikedStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PostLikedStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostLikedStreamCursorValueInput = {
  liked_at?: InputMaybe<Scalars['timestamptz']>;
  people_id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "post_liked" */
export const PostLikedUpdateColumn = {
  /** column name */
  LikedAt: 'liked_at',
  /** column name */
  PeopleId: 'people_id',
  /** column name */
  PostId: 'post_id'
} as const;

export type PostLikedUpdateColumn = typeof PostLikedUpdateColumn[keyof typeof PostLikedUpdateColumn];
export type PostLikedUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostLikedSetInput>;
  /** filter the rows which have to be updated */
  where: PostLikedBoolExp;
};

/** aggregate max on columns */
export type PostMaxFields = {
  __typename?: 'post_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publishAt?: Maybe<Scalars['timestamptz']>;
  publishedAt?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "post" */
export type PostMaxOrderBy = {
  author_id?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  publishAt?: InputMaybe<OrderBy>;
  publishedAt?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostMinFields = {
  __typename?: 'post_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publishAt?: Maybe<Scalars['timestamptz']>;
  publishedAt?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "post" */
export type PostMinOrderBy = {
  author_id?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  publishAt?: InputMaybe<OrderBy>;
  publishedAt?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "post" */
export type PostMutationResponse = {
  __typename?: 'post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type PostObjRelInsertInput = {
  data: PostInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PostOnConflict>;
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
  author_id?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  likes_aggregate?: InputMaybe<PostLikedAggregateOrderBy>;
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
export const PostSelectColumn = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  Body: 'body',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  PublishAt: 'publishAt',
  /** column name */
  PublishedAt: 'publishedAt',
  /** column name */
  Slug: 'slug',
  /** column name */
  StatusKey: 'statusKey',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updatedAt'
} as const;

export type PostSelectColumn = typeof PostSelectColumn[keyof typeof PostSelectColumn];
/** input type for updating data in table "post" */
export type PostSetInput = {
  author_id?: InputMaybe<Scalars['uuid']>;
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
  __typename?: 'post_status';
  key: Scalars['String'];
  label: Scalars['String'];
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: PostAggregate;
};


/** columns and relationships of "post_status" */
export type PostStatusPostsArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


/** columns and relationships of "post_status" */
export type PostStatusPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

/** aggregated selection of "post_status" */
export type PostStatusAggregate = {
  __typename?: 'post_status_aggregate';
  aggregate?: Maybe<PostStatusAggregateFields>;
  nodes: Array<PostStatus>;
};

/** aggregate fields of "post_status" */
export type PostStatusAggregateFields = {
  __typename?: 'post_status_aggregate_fields';
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
  posts_aggregate?: InputMaybe<PostAggregateBoolExp>;
};

/** unique or primary key constraints on table "post_status" */
export const PostStatusConstraint = {
  /** unique or primary key constraint on columns "key" */
  PostStatusPkey: 'post_status_pkey'
} as const;

export type PostStatusConstraint = typeof PostStatusConstraint[keyof typeof PostStatusConstraint];
export const PostStatusEnum = {
  /** 下書き */
  Draft: 'DRAFT',
  /** 公開済み */
  Published: 'PUBLISHED',
  /** 公開予約済み */
  PublishScheduled: 'PUBLISH_SCHEDULED'
} as const;

export type PostStatusEnum = typeof PostStatusEnum[keyof typeof PostStatusEnum];
/** Boolean expression to compare columns of type "post_status_enum". All fields are combined with logical 'AND'. */
export type PostStatusEnumComparisonExp = {
  _eq?: InputMaybe<PostStatusEnum>;
  _in?: InputMaybe<Array<PostStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
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
  __typename?: 'post_status_max_fields';
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostStatusMinFields = {
  __typename?: 'post_status_min_fields';
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_status" */
export type PostStatusMutationResponse = {
  __typename?: 'post_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostStatus>;
};

/** input type for inserting object relation for remote table "post_status" */
export type PostStatusObjRelInsertInput = {
  data: PostStatusInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PostStatusOnConflict>;
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
  posts_aggregate?: InputMaybe<PostAggregateOrderBy>;
};

/** primary key columns input for table: post_status */
export type PostStatusPkColumnsInput = {
  key: Scalars['String'];
};

/** select columns of table "post_status" */
export const PostStatusSelectColumn = {
  /** column name */
  Key: 'key',
  /** column name */
  Label: 'label'
} as const;

export type PostStatusSelectColumn = typeof PostStatusSelectColumn[keyof typeof PostStatusSelectColumn];
/** input type for updating data in table "post_status" */
export type PostStatusSetInput = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "post_status" */
export type PostStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PostStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostStatusStreamCursorValueInput = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** update columns of table "post_status" */
export const PostStatusUpdateColumn = {
  /** column name */
  Key: 'key',
  /** column name */
  Label: 'label'
} as const;

export type PostStatusUpdateColumn = typeof PostStatusUpdateColumn[keyof typeof PostStatusUpdateColumn];
export type PostStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostStatusSetInput>;
  /** filter the rows which have to be updated */
  where: PostStatusBoolExp;
};

/** Streaming cursor of the table "post" */
export type PostStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PostStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostStreamCursorValueInput = {
  author_id?: InputMaybe<Scalars['uuid']>;
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
export const PostUpdateColumn = {
  /** column name */
  AuthorId: 'author_id',
  /** column name */
  Body: 'body',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  PublishAt: 'publishAt',
  /** column name */
  PublishedAt: 'publishedAt',
  /** column name */
  Slug: 'slug',
  /** column name */
  StatusKey: 'statusKey',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updatedAt'
} as const;

export type PostUpdateColumn = typeof PostUpdateColumn[keyof typeof PostUpdateColumn];
export type PostUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostSetInput>;
  /** filter the rows which have to be updated */
  where: PostBoolExp;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: PeopleAggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  postAggregate: PostAggregate;
  /** fetch data from the table: "post" using primary key columns */
  postByPk?: Maybe<Post>;
  /** fetch data from the table: "post_liked" */
  post_liked: Array<PostLiked>;
  /** fetch aggregated fields from the table: "post_liked" */
  post_liked_aggregate: PostLikedAggregate;
  /** fetch data from the table: "post_liked" using primary key columns */
  post_liked_by_pk?: Maybe<PostLiked>;
  /** fetch data from the table: "post_status" */
  post_status: Array<PostStatus>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: PostStatusAggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<PostStatus>;
};


export type QueryRootPeopleArgs = {
  distinct_on?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type QueryRootPeopleAggregateArgs = {
  distinct_on?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type QueryRootPeopleByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type QueryRootPostAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type QueryRootPostByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostLikedArgs = {
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type QueryRootPostLikedAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type QueryRootPostLikedByPkArgs = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};


export type QueryRootPostStatusArgs = {
  distinct_on?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type QueryRootPostStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type QueryRootPostStatusByPkArgs = {
  key: Scalars['String'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: PeopleAggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table in a streaming manner: "people" */
  people_stream: Array<People>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  postAggregate: PostAggregate;
  /** fetch data from the table: "post" using primary key columns */
  postByPk?: Maybe<Post>;
  /** fetch data from the table in a streaming manner: "post" */
  postStream: Array<Post>;
  /** fetch data from the table: "post_liked" */
  post_liked: Array<PostLiked>;
  /** fetch aggregated fields from the table: "post_liked" */
  post_liked_aggregate: PostLikedAggregate;
  /** fetch data from the table: "post_liked" using primary key columns */
  post_liked_by_pk?: Maybe<PostLiked>;
  /** fetch data from the table in a streaming manner: "post_liked" */
  post_liked_stream: Array<PostLiked>;
  /** fetch data from the table: "post_status" */
  post_status: Array<PostStatus>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: PostStatusAggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<PostStatus>;
  /** fetch data from the table in a streaming manner: "post_status" */
  post_status_stream: Array<PostStatus>;
};


export type SubscriptionRootPeopleArgs = {
  distinct_on?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type SubscriptionRootPeopleAggregateArgs = {
  distinct_on?: InputMaybe<Array<PeopleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PeopleOrderBy>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type SubscriptionRootPeopleByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPeopleStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PeopleStreamCursorInput>>;
  where?: InputMaybe<PeopleBoolExp>;
};


export type SubscriptionRootPostArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type SubscriptionRootPostAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};


export type SubscriptionRootPostByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PostStreamCursorInput>>;
  where?: InputMaybe<PostBoolExp>;
};


export type SubscriptionRootPostLikedArgs = {
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type SubscriptionRootPostLikedAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikedSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikedOrderBy>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type SubscriptionRootPostLikedByPkArgs = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};


export type SubscriptionRootPostLikedStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PostLikedStreamCursorInput>>;
  where?: InputMaybe<PostLikedBoolExp>;
};


export type SubscriptionRootPostStatusArgs = {
  distinct_on?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type SubscriptionRootPostStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostStatusOrderBy>>;
  where?: InputMaybe<PostStatusBoolExp>;
};


export type SubscriptionRootPostStatusByPkArgs = {
  key: Scalars['String'];
};


export type SubscriptionRootPostStatusStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PostStatusStreamCursorInput>>;
  where?: InputMaybe<PostStatusBoolExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
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
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
