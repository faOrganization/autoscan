import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import {store} from './app/store.js';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App/>  
    </Router>
  </Provider>
)