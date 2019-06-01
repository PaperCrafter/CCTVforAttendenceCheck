import axios from 'axios';
import queryString from'query-string';

export const getPost = (id) => axios.get(`/api/posts/${id}`); 

export const getPostList = ({tag, page})=> axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);
export const getList = ({page})=> axios.get(`/GetPost?${queryString.stringify({page})}`);
