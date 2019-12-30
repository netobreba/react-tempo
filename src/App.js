import React from 'react';
import { Provider } from 'react-redux'

import store from './store/';
import './App.scss';

import Routes from './routes';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes/>
      </Provider> 
    </div>
  );
}

export default App;
