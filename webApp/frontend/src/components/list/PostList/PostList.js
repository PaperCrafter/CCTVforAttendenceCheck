import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';
//import post from '../../../store/modules/post';

const cx = classNames.bind(styles);
 
const PostItem = ({publishedDate, publishedTime, body, ImgBefore, ImgAfter}) => {
    return(
        <div className = {cx('post-item')}>
            <div className = {cx('date')}>{moment(publishedDate).format(`ll`)} {publishedTime}</div>
            <p>{removeMd(body)}</p>
            <div>
                <img src = {require(`C:/Users/paper/workspace/CCTVforAttendenceCheck/webApp/server/uploads/${ImgBefore}`)} width="50%"/>
                <img src = {require(`C:/Users/paper/workspace/CCTVforAttendenceCheck/webApp/server/uploads/${ImgAfter}`)} width="50%"/>
            </div>
            <div className={cx('post-list')}></div>
        </div>
    );
}

const PostList = ({posts}) =>{
    //console.log(posts);
    const postList = posts.map(
        (post)=>{
            const {Date, Time, Body, ImgBefore, ImgAfter} = post.toJS();
            return(
                <PostItem
                body = {Body}
                publishedDate = {Date}
                publishedTime = {Time}
                ImgBefore = {ImgBefore}
                ImgAfter = {ImgAfter}
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