import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppRoutes from "./routes";
import { StoreProvider } from "./store";

ReactDOM.render(
  <StoreProvider>
    <AppRoutes />
  </StoreProvider>,
  document.getElementById("root")
);
