import { createRoot } from "react-dom/client";
import React from "react";
import Store from "./Store";
import App from "./App";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
<Provider store={Store}>
  <App/>
</Provider>
);
