import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import routes from "./router";
import store from "./store";

import FGQAppHeader from "@/components/app-header";
import FGQAppFooter from "@/components/app-footer";
import FGQAppPlayerBar from "./pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <FGQAppHeader></FGQAppHeader>
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}  
        </Suspense>
        <FGQAppFooter></FGQAppFooter>
        <FGQAppPlayerBar/>
      </HashRouter>
    </Provider>
  );
});
