import { Routes,Route } from "react-router-dom"
import './App.css';
import LoginAndReg from "./component/pages/auth/LoginAndReg";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import Layout from "./component/pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginAndReg />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
