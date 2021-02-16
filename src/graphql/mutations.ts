/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      imageUrl
      team {
        id
        name
        users {
          nextToken
        }
        retros {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      imageUrl
      team {
        id
        name
        users {
          nextToken
        }
        retros {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      imageUrl
      team {
        id
        name
        users {
          nextToken
        }
        retros {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          name
          imageUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      retros {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          name
          imageUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      retros {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          name
          imageUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      retros {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRetro = /* GraphQL */ `
  mutation CreateRetro(
    $input: CreateRetroInput!
    $condition: ModelRetroConditionInput
  ) {
    createRetro(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      team {
        id
        name
        users {
          nextToken
        }
        retros {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRetro = /* GraphQL */ `
  mutation UpdateRetro(
    $input: UpdateRetroInput!
    $condition: ModelRetroConditionInput
  ) {
    updateRetro(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      team {
        id
        name
        users {
          nextToken
        }
        retros {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRetro = /* GraphQL */ `
  mutation DeleteRetro(
    $input: DeleteRetroInput!
    $condition: ModelRetroConditionInput
  ) {
    deleteRetro(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      team {
        id
        name
        users {
          nextToken
        }
        retros {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      content
      retro {
        id
        name
        posts {
          nextToken
        }
        team {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      content
      retro {
        id
        name
        posts {
          nextToken
        }
        team {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      content
      retro {
        id
        name
        posts {
          nextToken
        }
        team {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
