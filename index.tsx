```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./core/App/App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./core/App/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./core/store";
import { GlobalStyle } from "./core/App/GlobalStyle";
import { Normalize } from "styled-normalize";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
```