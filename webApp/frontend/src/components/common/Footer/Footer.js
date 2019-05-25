import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => (
    <footer className = {cx('footer')}>
        <Link to = "/" className = {cx('brand')}>CCTVApp</Link>
        <div className = {cx('login')}>{'made by papercraft & white doggy'}</div>
    </footer>
);

export default Footer;