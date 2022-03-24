const initialState = {
  posts: [],
  post: {},
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'GET_ONE_POSTS':
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};

export default PostReducer;
