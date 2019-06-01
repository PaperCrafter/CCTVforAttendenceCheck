import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ListPage, NotFoundPage, LoginPage} from 'pages';

const App = () => {
    return(
        <Switch>
            <Route exact path = '/login' component = {LoginPage}/>
            <Route exact path ='/' component = {ListPage}/>
            <Route exact path ='/page/:page' component = {ListPage}/>
            <Route component = {NotFoundPage}/>
        </Switch>
    );    
};

export default App;