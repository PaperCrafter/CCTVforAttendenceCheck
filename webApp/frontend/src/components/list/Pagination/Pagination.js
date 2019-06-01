import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Paginaition =({page, lastPage, tag})=>{
    const createPagePath = (page) =>{
        return `/page/${page}`;
    }

    return(
        <div className={cx('pagiation')}>
            <Button disabled={page===1} to={createPagePath(page-1)}>
                이전 페이지    
            </Button>
            <div className={cx('numbers')}>
                페이지 {page}
            </div>
            <Button disabled={page===lastPage} to={createPagePath(page+1)}>
                다음 페이지    
            </Button>
        </div>
    );
};

export default Paginaition;