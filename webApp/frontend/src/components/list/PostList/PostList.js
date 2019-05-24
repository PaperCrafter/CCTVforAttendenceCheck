import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';
//import post from '../../../store/modules/post';

const cx = classNames.bind(styles);

const PostItem = ({publishedDate, body, img, id}) => {
    return(
        <div className = {cx('post-item')}>
            <div className = {cx('date')}>{moment(publishedDate).format(`ll`)}</div>
            <p>{removeMd(body)}</p>
            <img src = {Image}/>
            <div className={cx('post-list')}></div>
        </div>
    );
}

const PostList = ({posts}) =>{
    //console.log(posts);
    const postList = posts.map(
        (post)=>{
            const {_id, body, publishedDate, img} = post.toJS();
            return(
                <PostItem
                body = {body}
                publishedDate = {publishedDate}
                img = {img}
                />
            )
        }
    );
    return(
        <div className={cx('post-list')}>
            {postList}
        </div>
    );
};

export default PostList;