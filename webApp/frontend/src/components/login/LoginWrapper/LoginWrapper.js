import React from 'react';
import styles from './LoginWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginWrapper = ({children}) => (
    <div className={cx('login-wrapper')}>
        {children}
    </div>
);

export default LoginWrapper;