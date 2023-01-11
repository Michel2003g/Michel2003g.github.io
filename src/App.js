import { HashRouter, Routes,Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

import './assets/css/style.css';
import './assets/css/index.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/contact' element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
