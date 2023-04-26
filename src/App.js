import { HashRouter, Routes,Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import './assets/css/style.css';
import './assets/css/index.css';

function App() {
  return (
    <Layout />
  );
}

export default App;
