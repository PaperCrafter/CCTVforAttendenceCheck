import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Button from '../Button';

const cx = classNames.bind(styles);

const Header = ()=>(
    <header className = {cx('header')}>
        <div className = {cx('header-content')}>
            <div className = {cx('brand')}>
                <Link to ="/">CCTVApp</Link>
            </div>
            <div className = {cx('right')}>
                <Button theme="outline" to = "/">로그아웃</Button>
            </div>
        </div>
    </header>
);

export default Header;