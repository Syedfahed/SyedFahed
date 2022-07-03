import "./App.css";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Aboutuser from "./components/Aboutuser";
import Connect from "./components/connect";
import Project from "./components/Project";
import Header from "./components/Header";

function App() {
  return (
    <>
    

    <Router>
   <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<Aboutuser/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/project" element={<Project/>}/>
      <Route exact path="/connect" element={<Connect/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
