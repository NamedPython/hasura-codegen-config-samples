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
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "people" */
  delete_people?: Maybe<People_Mutation_Response>;
  /** delete single row from the table: "people" */
  delete_people_by_pk?: Maybe<People>;
  /** delete data from the table: "post" */
  delete_post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "post" */
  delete_post_by_pk?: Maybe<Post>;
  /** delete data from the table: "post_liked" */
  delete_post_liked?: Maybe<Post_Liked_Mutation_Response>;
  /** delete single row from the table: "post_liked" */
  delete_post_liked_by_pk?: Maybe<Post_Liked>;
  /** delete data from the table: "post_status" */
  delete_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** delete single row from the table: "post_status" */
  delete_post_status_by_pk?: Maybe<Post_Status>;
  /** insert data into the table: "people" */
  insert_people?: Maybe<People_Mutation_Response>;
  /** insert a single row into the table: "people" */
  insert_people_one?: Maybe<People>;
  /** insert data into the table: "post" */
  insert_post?: Maybe<Post_Mutation_Response>;
  /** insert data into the table: "post_liked" */
  insert_post_liked?: Maybe<Post_Liked_Mutation_Response>;
  /** insert a single row into the table: "post_liked" */
  insert_post_liked_one?: Maybe<Post_Liked>;
  /** insert a single row into the table: "post" */
  insert_post_one?: Maybe<Post>;
  /** insert data into the table: "post_status" */
  insert_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** insert a single row into the table: "post_status" */
  insert_post_status_one?: Maybe<Post_Status>;
  /** update data of the table: "people" */
  update_people?: Maybe<People_Mutation_Response>;
  /** update single row of the table: "people" */
  update_people_by_pk?: Maybe<People>;
  /** update multiples rows of table: "people" */
  update_people_many?: Maybe<Array<Maybe<People_Mutation_Response>>>;
  /** update data of the table: "post" */
  update_post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "post" */
  update_post_by_pk?: Maybe<Post>;
  /** update data of the table: "post_liked" */
  update_post_liked?: Maybe<Post_Liked_Mutation_Response>;
  /** update single row of the table: "post_liked" */
  update_post_liked_by_pk?: Maybe<Post_Liked>;
  /** update multiples rows of table: "post_liked" */
  update_post_liked_many?: Maybe<Array<Maybe<Post_Liked_Mutation_Response>>>;
  /** update multiples rows of table: "post" */
  update_post_many?: Maybe<Array<Maybe<Post_Mutation_Response>>>;
  /** update data of the table: "post_status" */
  update_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** update single row of the table: "post_status" */
  update_post_status_by_pk?: Maybe<Post_Status>;
  /** update multiples rows of table: "post_status" */
  update_post_status_many?: Maybe<Array<Maybe<Post_Status_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_PeopleArgs = {
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_People_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Post_LikedArgs = {
  where: Post_Liked_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Liked_By_PkArgs = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Post_StatusArgs = {
  where: Post_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Status_By_PkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_PeopleArgs = {
  objects: Array<People_Insert_Input>;
  on_conflict?: InputMaybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_People_OneArgs = {
  object: People_Insert_Input;
  on_conflict?: InputMaybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_LikedArgs = {
  objects: Array<Post_Liked_Insert_Input>;
  on_conflict?: InputMaybe<Post_Liked_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Liked_OneArgs = {
  object: Post_Liked_Insert_Input;
  on_conflict?: InputMaybe<Post_Liked_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_StatusArgs = {
  objects: Array<Post_Status_Insert_Input>;
  on_conflict?: InputMaybe<Post_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Status_OneArgs = {
  object: Post_Status_Insert_Input;
  on_conflict?: InputMaybe<Post_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PeopleArgs = {
  _set?: InputMaybe<People_Set_Input>;
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_People_By_PkArgs = {
  _set?: InputMaybe<People_Set_Input>;
  pk_columns: People_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_People_ManyArgs = {
  updates: Array<People_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _set?: InputMaybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_LikedArgs = {
  _set?: InputMaybe<Post_Liked_Set_Input>;
  where: Post_Liked_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Liked_By_PkArgs = {
  _set?: InputMaybe<Post_Liked_Set_Input>;
  pk_columns: Post_Liked_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Liked_ManyArgs = {
  updates: Array<Post_Liked_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ManyArgs = {
  updates: Array<Post_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_StatusArgs = {
  _set?: InputMaybe<Post_Status_Set_Input>;
  where: Post_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Status_By_PkArgs = {
  _set?: InputMaybe<Post_Status_Set_Input>;
  pk_columns: Post_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Status_ManyArgs = {
  updates: Array<Post_Status_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "people" */
export type People = {
  __typename?: 'people';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  label_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  likedPosts: Array<Post_Liked>;
  /** An aggregate relationship */
  likedPosts_aggregate: Post_Liked_Aggregate;
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
  readable_id: Scalars['String'];
  tag_line: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "people" */
export type PeopleLikedPostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeopleLikedPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeoplePostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "people" */
export type PeoplePosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** aggregated selection of "people" */
export type People_Aggregate = {
  __typename?: 'people_aggregate';
  aggregate?: Maybe<People_Aggregate_Fields>;
  nodes: Array<People>;
};

/** aggregate fields of "people" */
export type People_Aggregate_Fields = {
  __typename?: 'people_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<People_Max_Fields>;
  min?: Maybe<People_Min_Fields>;
};


/** aggregate fields of "people" */
export type People_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<People_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "people". All fields are combined with a logical 'AND'. */
export type People_Bool_Exp = {
  _and?: InputMaybe<Array<People_Bool_Exp>>;
  _not?: InputMaybe<People_Bool_Exp>;
  _or?: InputMaybe<Array<People_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  label_name?: InputMaybe<String_Comparison_Exp>;
  likedPosts?: InputMaybe<Post_Liked_Bool_Exp>;
  likedPosts_aggregate?: InputMaybe<Post_Liked_Aggregate_Bool_Exp>;
  posts?: InputMaybe<Post_Bool_Exp>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  readable_id?: InputMaybe<String_Comparison_Exp>;
  tag_line?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "people" */
export enum People_Constraint {
  /** unique or primary key constraint on columns "id" */
  PeoplePkey = 'people_pkey',
  /** unique or primary key constraint on columns "readable_id", "tag_line" */
  PeopleReadableIdTagLineKey = 'people_readable_id_tag_line_key'
}

/** input type for inserting data into table "people" */
export type People_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  label_name?: InputMaybe<Scalars['String']>;
  likedPosts?: InputMaybe<Post_Liked_Arr_Rel_Insert_Input>;
  posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  readable_id?: InputMaybe<Scalars['String']>;
  tag_line?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type People_Max_Fields = {
  __typename?: 'people_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label_name?: Maybe<Scalars['String']>;
  readable_id?: Maybe<Scalars['String']>;
  tag_line?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type People_Min_Fields = {
  __typename?: 'people_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  label_name?: Maybe<Scalars['String']>;
  readable_id?: Maybe<Scalars['String']>;
  tag_line?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "people" */
export type People_Mutation_Response = {
  __typename?: 'people_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<People>;
};

/** input type for inserting object relation for remote table "people" */
export type People_Obj_Rel_Insert_Input = {
  data: People_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<People_On_Conflict>;
};

/** on_conflict condition type for table "people" */
export type People_On_Conflict = {
  constraint: People_Constraint;
  update_columns?: Array<People_Update_Column>;
  where?: InputMaybe<People_Bool_Exp>;
};

/** Ordering options when selecting data from "people". */
export type People_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label_name?: InputMaybe<Order_By>;
  likedPosts_aggregate?: InputMaybe<Post_Liked_Aggregate_Order_By>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  readable_id?: InputMaybe<Order_By>;
  tag_line?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: people */
export type People_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "people" */
export enum People_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LabelName = 'label_name',
  /** column name */
  ReadableId = 'readable_id',
  /** column name */
  TagLine = 'tag_line',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "people" */
export type People_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  label_name?: InputMaybe<Scalars['String']>;
  readable_id?: InputMaybe<Scalars['String']>;
  tag_line?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "people" */
export type People_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: People_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type People_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  label_name?: InputMaybe<Scalars['String']>;
  readable_id?: InputMaybe<Scalars['String']>;
  tag_line?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "people" */
export enum People_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LabelName = 'label_name',
  /** column name */
  ReadableId = 'readable_id',
  /** column name */
  TagLine = 'tag_line',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type People_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<People_Set_Input>;
  /** filter the rows which have to be updated */
  where: People_Bool_Exp;
};

/** columns and relationships of "post" */
export type Post = {
  __typename?: 'post';
  /** An object relationship */
  author: People;
  author_id: Scalars['uuid'];
  body?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  likes: Array<Post_Liked>;
  /** An aggregate relationship */
  likes_aggregate: Post_Liked_Aggregate;
  publish_at?: Maybe<Scalars['timestamptz']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  slug: Scalars['String'];
  /** An object relationship */
  status: Post_Status;
  status_key: Post_Status_Enum;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "post" */
export type PostLikesArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: 'post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

export type Post_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Aggregate_Bool_Exp_Count>;
};

export type Post_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: 'post_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
};


/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post" */
export type Post_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  author?: InputMaybe<People_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  likes?: InputMaybe<Post_Liked_Bool_Exp>;
  likes_aggregate?: InputMaybe<Post_Liked_Aggregate_Bool_Exp>;
  publish_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  published_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Post_Status_Bool_Exp>;
  status_key?: InputMaybe<Post_Status_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "post" */
export enum Post_Constraint {
  /** unique or primary key constraint on columns "slug", "author_id" */
  PostAuthorIdSlugKey = 'post_author_id_slug_key',
  /** unique or primary key constraint on columns "id" */
  PostPkey = 'post_pkey'
}

/** input type for inserting data into table "post" */
export type Post_Insert_Input = {
  author?: InputMaybe<People_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  likes?: InputMaybe<Post_Liked_Arr_Rel_Insert_Input>;
  publish_at?: InputMaybe<Scalars['timestamptz']>;
  published_at?: InputMaybe<Scalars['timestamptz']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Post_Status_Obj_Rel_Insert_Input>;
  status_key?: InputMaybe<Post_Status_Enum>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "post_liked" */
export type Post_Liked = {
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
export type Post_Liked_Aggregate = {
  __typename?: 'post_liked_aggregate';
  aggregate?: Maybe<Post_Liked_Aggregate_Fields>;
  nodes: Array<Post_Liked>;
};

export type Post_Liked_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Liked_Aggregate_Bool_Exp_Count>;
};

export type Post_Liked_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Liked_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Post_Liked_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_liked" */
export type Post_Liked_Aggregate_Fields = {
  __typename?: 'post_liked_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Post_Liked_Max_Fields>;
  min?: Maybe<Post_Liked_Min_Fields>;
};


/** aggregate fields of "post_liked" */
export type Post_Liked_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Liked_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_liked" */
export type Post_Liked_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Liked_Max_Order_By>;
  min?: InputMaybe<Post_Liked_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post_liked" */
export type Post_Liked_Arr_Rel_Insert_Input = {
  data: Array<Post_Liked_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Liked_On_Conflict>;
};

/** Boolean expression to filter rows from the table "post_liked". All fields are combined with a logical 'AND'. */
export type Post_Liked_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Liked_Bool_Exp>>;
  _not?: InputMaybe<Post_Liked_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Liked_Bool_Exp>>;
  liked_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  people?: InputMaybe<People_Bool_Exp>;
  people_id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Post_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_liked" */
export enum Post_Liked_Constraint {
  /** unique or primary key constraint on columns "people_id", "post_id" */
  PostLikedPkey = 'post_liked_pkey'
}

/** input type for inserting data into table "post_liked" */
export type Post_Liked_Insert_Input = {
  liked_at?: InputMaybe<Scalars['timestamptz']>;
  people?: InputMaybe<People_Obj_Rel_Insert_Input>;
  people_id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Post_Liked_Max_Fields = {
  __typename?: 'post_liked_max_fields';
  liked_at?: Maybe<Scalars['timestamptz']>;
  people_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "post_liked" */
export type Post_Liked_Max_Order_By = {
  liked_at?: InputMaybe<Order_By>;
  people_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Liked_Min_Fields = {
  __typename?: 'post_liked_min_fields';
  liked_at?: Maybe<Scalars['timestamptz']>;
  people_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "post_liked" */
export type Post_Liked_Min_Order_By = {
  liked_at?: InputMaybe<Order_By>;
  people_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_liked" */
export type Post_Liked_Mutation_Response = {
  __typename?: 'post_liked_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Liked>;
};

/** on_conflict condition type for table "post_liked" */
export type Post_Liked_On_Conflict = {
  constraint: Post_Liked_Constraint;
  update_columns?: Array<Post_Liked_Update_Column>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};

/** Ordering options when selecting data from "post_liked". */
export type Post_Liked_Order_By = {
  liked_at?: InputMaybe<Order_By>;
  people?: InputMaybe<People_Order_By>;
  people_id?: InputMaybe<Order_By>;
  post?: InputMaybe<Post_Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_liked */
export type Post_Liked_Pk_Columns_Input = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};

/** select columns of table "post_liked" */
export enum Post_Liked_Select_Column {
  /** column name */
  LikedAt = 'liked_at',
  /** column name */
  PeopleId = 'people_id',
  /** column name */
  PostId = 'post_id'
}

/** input type for updating data in table "post_liked" */
export type Post_Liked_Set_Input = {
  liked_at?: InputMaybe<Scalars['timestamptz']>;
  people_id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "post_liked" */
export type Post_Liked_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Liked_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Liked_Stream_Cursor_Value_Input = {
  liked_at?: InputMaybe<Scalars['timestamptz']>;
  people_id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "post_liked" */
export enum Post_Liked_Update_Column {
  /** column name */
  LikedAt = 'liked_at',
  /** column name */
  PeopleId = 'people_id',
  /** column name */
  PostId = 'post_id'
}

export type Post_Liked_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Liked_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Liked_Bool_Exp;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: 'post_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publish_at?: Maybe<Scalars['timestamptz']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publish_at?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: 'post_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publish_at?: Maybe<Scalars['timestamptz']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publish_at?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post" */
export type Post_Mutation_Response = {
  __typename?: 'post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** on_conflict condition type for table "post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "post". */
export type Post_Order_By = {
  author?: InputMaybe<People_Order_By>;
  author_id?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Post_Liked_Aggregate_Order_By>;
  publish_at?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  status?: InputMaybe<Post_Status_Order_By>;
  status_key?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post */
export type Post_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PublishAt = 'publish_at',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Slug = 'slug',
  /** column name */
  StatusKey = 'status_key',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "post" */
export type Post_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  publish_at?: InputMaybe<Scalars['timestamptz']>;
  published_at?: InputMaybe<Scalars['timestamptz']>;
  slug?: InputMaybe<Scalars['String']>;
  status_key?: InputMaybe<Post_Status_Enum>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "post_status" */
export type Post_Status = {
  __typename?: 'post_status';
  key: Scalars['String'];
  label: Scalars['String'];
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
};


/** columns and relationships of "post_status" */
export type Post_StatusPostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "post_status" */
export type Post_StatusPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** aggregated selection of "post_status" */
export type Post_Status_Aggregate = {
  __typename?: 'post_status_aggregate';
  aggregate?: Maybe<Post_Status_Aggregate_Fields>;
  nodes: Array<Post_Status>;
};

/** aggregate fields of "post_status" */
export type Post_Status_Aggregate_Fields = {
  __typename?: 'post_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Post_Status_Max_Fields>;
  min?: Maybe<Post_Status_Min_Fields>;
};


/** aggregate fields of "post_status" */
export type Post_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_status". All fields are combined with a logical 'AND'. */
export type Post_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Status_Bool_Exp>>;
  _not?: InputMaybe<Post_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Status_Bool_Exp>>;
  key?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Post_Bool_Exp>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "post_status" */
export enum Post_Status_Constraint {
  /** unique or primary key constraint on columns "key" */
  PostStatusPkey = 'post_status_pkey'
}

export enum Post_Status_Enum {
  /** 下書き */
  Draft = 'DRAFT',
  /** 公開済み */
  Published = 'PUBLISHED',
  /** 公開予約済み */
  PublishScheduled = 'PUBLISH_SCHEDULED'
}

/** Boolean expression to compare columns of type "post_status_enum". All fields are combined with logical 'AND'. */
export type Post_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Post_Status_Enum>;
  _in?: InputMaybe<Array<Post_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Post_Status_Enum>;
  _nin?: InputMaybe<Array<Post_Status_Enum>>;
};

/** input type for inserting data into table "post_status" */
export type Post_Status_Insert_Input = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Status_Max_Fields = {
  __typename?: 'post_status_max_fields';
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Post_Status_Min_Fields = {
  __typename?: 'post_status_min_fields';
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_status" */
export type Post_Status_Mutation_Response = {
  __typename?: 'post_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Status>;
};

/** input type for inserting object relation for remote table "post_status" */
export type Post_Status_Obj_Rel_Insert_Input = {
  data: Post_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Status_On_Conflict>;
};

/** on_conflict condition type for table "post_status" */
export type Post_Status_On_Conflict = {
  constraint: Post_Status_Constraint;
  update_columns?: Array<Post_Status_Update_Column>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "post_status". */
export type Post_Status_Order_By = {
  key?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
};

/** primary key columns input for table: post_status */
export type Post_Status_Pk_Columns_Input = {
  key: Scalars['String'];
};

/** select columns of table "post_status" */
export enum Post_Status_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "post_status" */
export type Post_Status_Set_Input = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "post_status" */
export type Post_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Status_Stream_Cursor_Value_Input = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** update columns of table "post_status" */
export enum Post_Status_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label'
}

export type Post_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Status_Bool_Exp;
};

/** Streaming cursor of the table "post" */
export type Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']>;
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  publish_at?: InputMaybe<Scalars['timestamptz']>;
  published_at?: InputMaybe<Scalars['timestamptz']>;
  slug?: InputMaybe<Scalars['String']>;
  status_key?: InputMaybe<Post_Status_Enum>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "post" */
export enum Post_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PublishAt = 'publish_at',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Slug = 'slug',
  /** column name */
  StatusKey = 'status_key',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Post_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_liked" */
  post_liked: Array<Post_Liked>;
  /** fetch aggregated fields from the table: "post_liked" */
  post_liked_aggregate: Post_Liked_Aggregate;
  /** fetch data from the table: "post_liked" using primary key columns */
  post_liked_by_pk?: Maybe<Post_Liked>;
  /** fetch data from the table: "post_status" */
  post_status: Array<Post_Status>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: Post_Status_Aggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<Post_Status>;
};


export type Query_RootPeopleArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Query_RootPeople_AggregateArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Query_RootPeople_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPost_LikedArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


export type Query_RootPost_Liked_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


export type Query_RootPost_Liked_By_PkArgs = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};


export type Query_RootPost_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};


export type Query_RootPost_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};


export type Query_RootPost_Status_By_PkArgs = {
  key: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table in a streaming manner: "people" */
  people_stream: Array<People>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_liked" */
  post_liked: Array<Post_Liked>;
  /** fetch aggregated fields from the table: "post_liked" */
  post_liked_aggregate: Post_Liked_Aggregate;
  /** fetch data from the table: "post_liked" using primary key columns */
  post_liked_by_pk?: Maybe<Post_Liked>;
  /** fetch data from the table in a streaming manner: "post_liked" */
  post_liked_stream: Array<Post_Liked>;
  /** fetch data from the table: "post_status" */
  post_status: Array<Post_Status>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: Post_Status_Aggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<Post_Status>;
  /** fetch data from the table in a streaming manner: "post_status" */
  post_status_stream: Array<Post_Status>;
  /** fetch data from the table in a streaming manner: "post" */
  post_stream: Array<Post>;
};


export type Subscription_RootPeopleArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPeople_AggregateArgs = {
  distinct_on?: InputMaybe<Array<People_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<People_Order_By>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPeople_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPeople_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<People_Stream_Cursor_Input>>;
  where?: InputMaybe<People_Bool_Exp>;
};


export type Subscription_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPost_LikedArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


export type Subscription_RootPost_Liked_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Liked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Liked_Order_By>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


export type Subscription_RootPost_Liked_By_PkArgs = {
  people_id: Scalars['uuid'];
  post_id: Scalars['uuid'];
};


export type Subscription_RootPost_Liked_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Post_Liked_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Liked_Bool_Exp>;
};


export type Subscription_RootPost_StatusArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};


export type Subscription_RootPost_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Status_Order_By>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};


export type Subscription_RootPost_Status_By_PkArgs = {
  key: Scalars['String'];
};


export type Subscription_RootPost_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Post_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Status_Bool_Exp>;
};


export type Subscription_RootPost_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
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
export type Uuid_Comparison_Exp = {
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
