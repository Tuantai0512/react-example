const initState = {
  users: [
    { id: 1, name: 'Tai' },
    { id: 2, name: 'Tien' },
    { id: 3, name: 'Hau Occho' },
    { id: 4, name: 'Hau cuk ki occho' }
  ]
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      let users = state.users;
      users = users.filter(item => item.id !== action.payload.id);
      console.log({ ...state, users })
      return {
        ...state, users
      }
    case 'CREATE_USER':
      let id = Math.floor(Math.random() * 10000)
      let user = { id: id, name: `random - ${id}` }
      return {
        ...state, users: [...state.users, user]
      }
    default:
      return state
  }
}

export default userReducer