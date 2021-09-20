import React from "react";
import { HydraAdmin, fetchHydra, hydraDataProvider } from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";

const entrypoint = "https://localhost";

const dataProvider = hydraDataProvider(
  entrypoint,
  fetchHydra,
  parseHydraDocumentation,
  false // useEmbedded parameter
);

const App = () => (
  <HydraAdmin
    dataProvider={ dataProvider }
    entrypoint={ entrypoint }
  />
);

export default App;