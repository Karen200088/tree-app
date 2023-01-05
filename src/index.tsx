import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";
import GlobalStyles from "./styles/globalStyles";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App/>
    </Provider>
  </React.StrictMode>
);