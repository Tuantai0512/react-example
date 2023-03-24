export const deleteUser = (user) => {
    return {
      type: 'DELETE_USER',
      payload: user
    }
  }
  
  export const createUser = (user) => {
    return {
      type: 'CREATE_USER'
    }
  }