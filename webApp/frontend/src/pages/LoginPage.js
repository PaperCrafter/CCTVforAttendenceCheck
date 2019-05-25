import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import LoginWrapper from 'components/login/LoginWrapper';
import LoginBox from 'components/login/LoginBox';
import LoginContainer from 'components/login/LoginContainer';

const LoginPage = ()=>{
    return (
        
        <PageTemplate>
            <LoginWrapper>
                <LoginBox/>
            </LoginWrapper>
        </PageTemplate>
    );
};

export default LoginPage;