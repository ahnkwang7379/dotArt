import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga, DOT_ACTIONS } from './modules';
import { createLogger } from 'redux-logger';
import { check, tempSetUser } from './modules/user';
import undoable, { includeAction } from 'redux-undo';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

// const createIncludedActions = () => includeAction([DOT_ACTIONS]);

// const store = createStore(
//   undoable(rootReducer, {
//     filter: createIncludedActions(),
//     debug: true,
//     ignoreInitialState: true,
//   }),
//   composeWithDevTools(applyMiddleware(sagaMiddleware)),
// );

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
  try {
    const user = localStorage.getItem('dotArt_user');
    if (!user) return;

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working!');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
