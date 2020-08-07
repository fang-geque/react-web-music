import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import routes from "./router";
import store from "./store";

import FGQAppHeader from "@/components/app-header";
import FGQAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <FGQAppHeader></FGQAppHeader>
        {renderRoutes(routes)}
        <FGQAppFooter></FGQAppFooter>
      </HashRouter>
    </Provider>
  );
});
