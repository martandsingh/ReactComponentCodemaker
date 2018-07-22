import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM render method basically renders your component to index.html file inside a conatiner 
//named root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
