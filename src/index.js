import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main/App';
import { StateProvider } from './Extra/StateProvider';
import reducer, { initialState } from './Extra/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
