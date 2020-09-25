import { Post } from "./post";
import { GET_POSTS, PostActions, PostState, ADD_POST } from "./types";

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
    case ADD_POST:
      const { id, title, body, userId } = action.payload;

      const newPost: Post = {
        id,
        title,
        body,
        userId,
      }

      return {
        ...state,
        posts: [newPost].concat(state.posts)
      }
    default:
      return state;
  }
};

export default postReducer;