import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./storeRedux/store.js";
import { Suspense } from "react";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={"..."}>
    <Provider store={store}>
      <BrowserRouter basename="messenger">
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </Suspense>
);
