import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'components/list/ListContainer';

const ListPage = ({match})=>{
    const {page = 1} = match.params;

    return ( 
        <PageTemplate>
            <ListWrapper>
                <ListContainer
                    page={parseInt(page, 10)}
                />
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;