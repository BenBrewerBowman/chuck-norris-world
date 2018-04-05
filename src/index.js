import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { requireAuth, isLoggedIn } from './utils/AuthService';


const Root = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={FoodJokes}/>

          <Route path="/special" render={() => (
            isLoggedIn() ? <Redirect to="/"/> : <CelebrityJokes />
          )} />

          <Route path="/callback" component={Callback} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
