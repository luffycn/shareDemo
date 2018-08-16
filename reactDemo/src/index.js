import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";


 
const reducer = (state={list:[]},action)=>{
    console.log(1)
    switch(action.type){
        case 'ADD_TODO':
            const newState = Object.assign({},state);
            newState.list.push(action.payload);
            return newState;
        default:
            return state;
    }
}

const store = createStore(reducer)


function renderPage(){
    console.log(2)
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

renderPage();

store.subscribe(renderPage);

registerServiceWorker();


