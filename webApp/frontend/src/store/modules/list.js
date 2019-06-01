import {createAction, handleActions} from 'redux-actions';

import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender'

import * as api from 'lib/api'

//action types
const GET_POST_LIST = 'list/GET_POST_LIST';

//action creators
export const getPostList = createAction(GET_POST_LIST, api.getList, meta => meta);

//initial states
const initialState = Map({
    posts:List(),
    lastPage:null
});

//reducers
export default handleActions({
    ...pender({
        type:GET_POST_LIST,
        onSuccess:(state, action)=>{
            const{data:posts} = action.payload;

            const lastPage = action.payload.headers['last-page'];

            console.log(lastPage + 'ls')
            return state.set('posts', fromJS(posts)).set('lastPage', parseInt(lastPage,10));
        }
    })
}, initialState);  