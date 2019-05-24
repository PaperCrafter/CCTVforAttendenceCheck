import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ListPage, NotFoundPage} from 'pages';

const App = () => {
    return(
        <Switch>
            <Route exact path ='/' component = {ListPage}/>

            <Route component = {NotFoundPage}/>
        </Switch>
    );    
};

export default App;