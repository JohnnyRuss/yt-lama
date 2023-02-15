import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import Theme from "./Theme";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Theme>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </Theme>
);
