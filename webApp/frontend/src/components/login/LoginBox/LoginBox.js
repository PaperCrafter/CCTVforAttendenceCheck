import React from 'react';
import classNames from 'classnames/bind'
import styles from './LoginBox.scss';

const cx = classNames.bind(styles);

const LoginBox = ({
    id, error, onLogin, onChange, onKeyPress
})=>(
    <div className = {cx('LoginBox')}>
        <div className={cx('title')}>로그인</div>
        <div className={cx('desc')}>(학번/교수번호)을 입력해 주세요</div>
        <input autoFocus placeholder="학번 입력" type="text" value={id}
         onChange = {onChange} onKeyPress={onKeyPress}/>
         {error&&<div className = {cx('error')}>로그인 실패</div>}
        <div className = {cx('btn')}>로그인</div>
        <div className = {cx('btn')}>회원가입</div>
    </div>
);

export default LoginBox;