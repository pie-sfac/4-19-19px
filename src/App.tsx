import Modal from "react-modal";
import AppRouter from "./router/Router";
import { SWRConfig } from "swr";

Modal.setAppElement("#root");

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: ({ url, auth }) =>
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: auth,
            },
          }).then((res) => res.json()),
      }}
    >
      <AppRouter />
    </SWRConfig>
  );
}

export default App;
