import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reducer/index';
import { BrowserRouter } from 'react-router-dom';
import { initFacebookSdk } from './helpers/init-facebook';

initFacebookSdk().then(startApp);

function startApp() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
