/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateRetro = /* GraphQL */ `
  subscription OnCreateRetro {
    onCreateRetro {
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
export const onUpdateRetro = /* GraphQL */ `
  subscription OnUpdateRetro {
    onUpdateRetro {
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
export const onDeleteRetro = /* GraphQL */ `
  subscription OnDeleteRetro {
    onDeleteRetro {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
