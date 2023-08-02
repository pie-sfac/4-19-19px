import Modal from "react-modal";
import AppRouter from "./router/Router";

Modal.setAppElement("#root");

function App() {
  return <AppRouter />;
}

export default App;
