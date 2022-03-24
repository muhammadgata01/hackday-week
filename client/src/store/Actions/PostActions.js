import { baseUrl } from '../../Services/Constants';
import axios from 'axios';

export const getAllPosts = () => {
  return dispatch => {
    axios.get(`${baseUrl}/posts`).then(response => {
      dispatch({ type: 'GET_ALL_POSTS', payload: response.data });
    });
  };
};

export const getOnePosts = id => {
  return dispatch => {
    axios.get(`${baseUrl}/posts/${id}`).then(response => {
      dispatch({ type: 'GET_ONE_POSTS', payload: response.data });
    });
  };
};
