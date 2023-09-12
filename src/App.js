import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginPage from "./pages/LoginPage";
import DebtsPage from "./pages/DebtsPage";
import TransactionPage from "./pages/TransactionPage";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
          <Route path="/" element={<DebtsPage />} />
        <Route path="/" element={<LoginPage/>}>
          <Route element={<Layout />} />
          <Route path="/transaction" element={<TransactionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
