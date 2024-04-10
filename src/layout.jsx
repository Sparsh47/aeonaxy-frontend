import React, { useState } from "react";
import { PageContext } from "./context";
import App from "./App";

function Layout() {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(false);

  const contextValue = {
    page,
    setPage,
    start,
    setStart,
  };

  return (
    <PageContext.Provider value={contextValue}>
      <App />
    </PageContext.Provider>
  );
}

export default Layout;
