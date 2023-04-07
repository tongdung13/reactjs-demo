import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
