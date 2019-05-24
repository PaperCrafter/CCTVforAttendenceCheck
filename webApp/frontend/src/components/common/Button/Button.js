import React from 'react';
import styles from './Button.scss';
import className from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onCLick, disabled, theme = 'default',
}) => {
    const Element = (to && !disabled) ? Link : Div;

    return(
        <Element
            to={to}
            className ={cx('button', theme, {disabled})}
            onClick = {diabled? ()=> null:onClick}>
            {children}
        </Element>
    )
};

export default Button;