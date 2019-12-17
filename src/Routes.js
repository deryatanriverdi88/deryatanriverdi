import React from 'react' ;
import  { Switch,  Route } from 'react-router-dom';
import Pages from './Pages'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="test-one" component={Pages.TestOne}/>
                <Route exact path="test-two" component={Pages.TestTwo}/>
            </Switch>
        </div>
    )
}

export default Routes
