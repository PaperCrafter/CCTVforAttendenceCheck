import React, {Component} from 'React';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import PostImg from 'components/post/PostImg';
import * as PostActions from 'store/modules/post';
import {connect} from 'react-redux';
import {bindActionCreateors} from 'redux';

class Post extends Component{
    initialize = async () =>{
        const {postActions, id} = this.props;
        try{
            await postActions.getpost(id);
        }catch(e){
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render(){
        const {loading, post} = this.props;

        if(loading) return null;

        const {body, publishedDate, image} = post.toJS();
        return(
            <div>
                <PostInfo publishedDate={publishedDate}/>
                <PostImg src = {image}/>
                <PostBody body={body}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        post:state.post.get('post'),
        loading:state.pender.pending['post/GET_POST']
    }),
    (dispatch)=>({
        PostActions:bindActionCreateors(postActions, dispatch)
    })
)(Post);