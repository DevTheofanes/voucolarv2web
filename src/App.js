import { Router } from "react-router-dom";
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify';

import history from './services/history'
import { AcessRoutes } from "./routes/AcessRoutes";
import Global from "./styles/Global";
import { Routes } from "./routes/routes";

import { CartContextProvider } from './hooks/useCart'
import { UserContextProvider } from "./hooks/useUser";

Modal.setAppElement('#root')

function App() {
  return (
    <UserContextProvider>
      <Router history={history}>
        <CartContextProvider>
          <Global />
          <AcessRoutes />
          <Routes />
          <ToastContainer autoClose={1500}/>
        </CartContextProvider>
      </Router>
    </UserContextProvider>
  );
}

export default App;
