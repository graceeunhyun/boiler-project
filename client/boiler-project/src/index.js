import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers/index'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// 원래는 그냥 createStore 를 해주는 데 promise 와 function 도 받도록 middleware 를 같이 인자에 넣어준다. 
const createStoreWithMiddleware =applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  //chrome 에 있는 devtools_extension 을 넣어서 사용한 경우 
  // <Provider 
  //  = {createStoreWithMiddleware(Reducer,
  // winstoredow.__REDUX_DEVTOOLS_EXTENSION__&&
  // window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
