import React from 'react';
import { HashRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './assets/css/style.scss'
import Layouts from './components/layout/layout'
import store from '@/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Provider store={store}>
          <Layouts></Layouts>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
