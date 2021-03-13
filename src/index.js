import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// createStoreを実行することで初めてStoreが作られる
export const store = createStore();

ReactDOM.render(
  // ProviderでAppコンポーネントを囲むことでApp以下のコンポーネントでstoreが参照できる
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
