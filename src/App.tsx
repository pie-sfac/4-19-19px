import AppRouter from "./router/Router";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="w-[390px] h-[844px] px-4 bg-white mx-auto mt-10">
      <AppRouter />
    </div>
  );
}

export default App;
