import { GET_POSTS, PostActions, PostState } from "./types";

const initialState: PostState = {
  posts: []
}

const postReducer = (state = initialState, action: PostActions): PostState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;