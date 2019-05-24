import React, {Component} from 'react';
import PostList from 'components/list/PostList';
//import Pagenation from 'components/list/Pagenation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listActions from 'store/modules/list';

class ListContainer extends Component {
    getPostList =()=>{
        const {page, ListActions} = this.props;
        ListActions.getPostList({
            page
        });
    }

    componentDidMount(){
        this.getPostList();
    }

    compoenetDidUpdate(prevProps, prevState){
        if(prevProps.page !== this.props.page){
            this.getPostList();
            document.documentElement.scrollTop = 0;
        }
    }

    render(){
        const {loading, posts, page, lastPage} = this.props;
        if(loading) return null;
        return(
            <div>
                <PostList posts = {posts}/>
                {/*<Pagenation page={page} lastPage={lastPage}/>*/}
            </div>
        );
    }
}

export default connect(
    (state)=>({
        posts:state.list.get('posts'),
        loading:state.pender.pending['list/GET_POST_LIST']
    }),
    (dispatch) => ({
       ListActions:bindActionCreators(listActions, dispatch) 
    })
)(ListContainer);