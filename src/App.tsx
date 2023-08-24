import Modal from "react-modal";
import AppRouter from "./router/Router";
import { SWRConfig } from "swr";
import useApi from "./libs/useApi";

Modal.setAppElement("#root");

function App() {
  const { api } = useApi();
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          api({
            url,
          }).then((res) => res.data),
      }}
    >
      <AppRouter />
    </SWRConfig>
  );
}

export default App;
