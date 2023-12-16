import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{ error: { duration: 3000 } }}
      />
    </Router>
  </React.StrictMode>
);
