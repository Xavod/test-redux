import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import productsApp from './reducers/index'
import { fetchProducts } from "./actions";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(productsApp, composeWithDevTools(applyMiddleware(thunk)));

// Charger les données initiales de l'API
store.dispatch(fetchProducts());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
