const initialState = {
  isFetching: false,
  posts: []
}

// previous state that changes after the action is applied
const post = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_ADD_POST':
      return {
        ...state,
        isFetching: true
      }
    
    case 'RECEIVE_ADD_POST':
      return{
        ...state,
        isFetching: false,
        posts: [
          ...state.posts,
          {
            id: action.id,
            content: action.content,
            wallId: action.wallId
          }
        ]
      }
    default:
      return state
  }
}

export default post