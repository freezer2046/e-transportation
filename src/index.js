import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Checkbox from './Checkbox';
// import Calculator from './components/Calculator';
import Cascade from './components/Cascade';
// import App from './App'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Cascade />, document.getElementById('root'));

serviceWorker.unregister();
