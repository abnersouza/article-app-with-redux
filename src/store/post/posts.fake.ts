import { Dispatch } from 'redux';
import { getPostsAction } from './actions';
import { PostActions } from './types';

export const getPosts = () => {
  return function (dispatch: Dispatch<PostActions>) {
    const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getPostsAction(data));
        return data;
      });
  };
};