import React from 'react';
import classNames from 'classnames/bind'
import styles from './SelectBox.scss';

const cx = classNames.bind(styles);

const SelectBox = ({
    id, error, onLogin, onChange, onKeyPress
})=>(
    <div className = {cx('SelectBox')}>
        <div className={cx('title')}>로그인</div>
        <div className={cx('desc')}>과목을 선택해 주세요</div>
        <select autoFocus placeholder="학번 입력" type="text" value={id}
         onChange = {onChange} onKeyPress={onKeyPress}>
             <option>컴퓨터 구조론</option>
         </select>
        <div className = {cx('btn')}>Start!</div>
        <div className = {cx('btn')}>뒤로가기</div>
    </div>
);

export default SelectBox;