import './App.css';
import { Provider } from "react-redux";
import store from "./controllers/store";
import AppRoutes from "./common/router/main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
