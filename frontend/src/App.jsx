import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Profil from "./pages/Profil";
import Home from "./pages/Home";
import CamaradeList from "./pages/CamaradeList";
import UserList from "./pages/UserList";
import Agenda from "./pages/Agenda";
import Error from "./pages/Error";
import LOGO from "./assets/img/logo_size_invert.jpg";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div id="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/CamaradeList" element={<CamaradeList />} />
          <Route path="/utilisateurs" element={<UserList />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>

      <img className="logo_jdb" src={LOGO} alt="logo" />
    </div>
  );
}

export default App;
