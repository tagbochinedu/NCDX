import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
