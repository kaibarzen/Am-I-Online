import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
