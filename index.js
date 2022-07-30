import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Page1 from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export default root;

root.render(
  <StrictMode>
    <Page1 />
  </StrictMode>
);
