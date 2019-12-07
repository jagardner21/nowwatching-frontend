import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));