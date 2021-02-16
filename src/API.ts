/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUrl: string,
  userTeamId?: string | null,
  teamUsersId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  imageUrl?: string,
  team?: Team,
  createdAt?: string,
  updatedAt?: string,
};

export type Team = {
  __typename: "Team",
  id?: string,
  name?: string,
  users?: ModelUserConnection,
  retros?: ModelRetroConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelRetroConnection = {
  __typename: "ModelRetroConnection",
  items?:  Array<Retro | null > | null,
  nextToken?: string | null,
};

export type Retro = {
  __typename: "Retro",
  id?: string,
  name?: string,
  posts?: ModelPostConnection,
  team?: Team,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id?: string,
  content?: string,
  retro?: Retro,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUrl?: string | null,
  userTeamId?: string | null,
  teamUsersId?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeamInput = {
  id?: string | null,
};

export type CreateRetroInput = {
  id?: string | null,
  name: string,
  teamRetrosId?: string | null,
  retroTeamId?: string | null,
};

export type ModelRetroConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRetroConditionInput | null > | null,
  or?: Array< ModelRetroConditionInput | null > | null,
  not?: ModelRetroConditionInput | null,
};

export type UpdateRetroInput = {
  id: string,
  name?: string | null,
  teamRetrosId?: string | null,
  retroTeamId?: string | null,
};

export type DeleteRetroInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  retroPostsId?: string | null,
  postRetroId?: string | null,
};

export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  retroPostsId?: string | null,
  postRetroId?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
};

export type ModelRetroFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelRetroFilterInput | null > | null,
  or?: Array< ModelRetroFilterInput | null > | null,
  not?: ModelRetroFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input?: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    retros?:  {
      __typename: "ModelRetroConnection",
      items?:  Array< {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input?: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    retros?:  {
      __typename: "ModelRetroConnection",
      items?:  Array< {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input?: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    retros?:  {
      __typename: "ModelRetroConnection",
      items?:  Array< {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRetroMutationVariables = {
  input?: CreateRetroInput,
  condition?: ModelRetroConditionInput | null,
};

export type CreateRetroMutation = {
  createRetro?:  {
    __typename: "Retro",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRetroMutationVariables = {
  input?: UpdateRetroInput,
  condition?: ModelRetroConditionInput | null,
};

export type UpdateRetroMutation = {
  updateRetro?:  {
    __typename: "Retro",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRetroMutationVariables = {
  input?: DeleteRetroInput,
  condition?: ModelRetroConditionInput | null,
};

export type DeleteRetroMutation = {
  deleteRetro?:  {
    __typename: "Retro",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    retro?:  {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    retro?:  {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    retro?:  {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUrl: string,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id?: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    retros?:  {
      __typename: "ModelRetroConnection",
      items?:  Array< {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRetroQueryVariables = {
  id?: string,
};

export type GetRetroQuery = {
  getRetro?:  {
    __typename: "Retro",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRetrosQueryVariables = {
  filter?: ModelRetroFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRetrosQuery = {
  listRetros?:  {
    __typename: "ModelRetroConnection",
    items?:  Array< {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    retro?:  {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      retro?:  {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUrl: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    retros?:  {
      __typename: "ModelRetroConnection",
      items?:  Array< {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    retros?:  {
      __typename: "ModelRetroConnection",
      items?:  Array< {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        name: string,
        imageUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    retros?:  {
      __typename: "ModelRetroConnection",
      items?:  Array< {
        __typename: "Retro",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRetroSubscription = {
  onCreateRetro?:  {
    __typename: "Retro",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRetroSubscription = {
  onUpdateRetro?:  {
    __typename: "Retro",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRetroSubscription = {
  onDeleteRetro?:  {
    __typename: "Retro",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      retros?:  {
        __typename: "ModelRetroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    retro?:  {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    retro?:  {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    retro?:  {
      __typename: "Retro",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
