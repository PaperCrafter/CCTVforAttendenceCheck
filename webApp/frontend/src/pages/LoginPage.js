import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import LoginWrapper from 'components/login/LoginWrapper';
import LoginBox from 'components/login/LoginBox';
import LoginContainer from 'components/login/LoginContainer';
import SelectBox from 'components/login/SelectBox';

const LoginPage = ()=>{
    return (
        
        <PageTemplate>
            <LoginWrapper>
                {/*/<SelectBox/>*/}
                <LoginBox/>
            </LoginWrapper>
        </PageTemplate>
    );
};

export default LoginPage;