import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

import App from './components/app';
import Army from './components/army';
import Parts from './components/parts';
import Rules from './components/rules';
import Lore from './components/lore';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Army" component={Army} />
            <Route exact path="/Parts" component={Parts} />
            <Route exact path="/Rules" component={Rules} />
            <Route exact path="/Lore" component={Lore} />
         </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
