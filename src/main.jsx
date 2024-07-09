import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactToastifyProvider from './assets/contexts/ReactToastifyProvider.jsx';
import { Provider } from "react-redux";
import { store } from "./assets/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactToastifyProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ReactToastifyProvider>
  </React.StrictMode>
);
