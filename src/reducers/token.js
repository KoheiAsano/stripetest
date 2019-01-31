const token = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      return action.token
    default:
      return state
  }
}

export default token
