import AppRouter from "./router/Router";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="w-[390px] min-h-[844px] bg-white mx-auto">
      <AppRouter />
    </div>
  );
}

export default App;
