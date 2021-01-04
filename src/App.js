import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return <HashRouter>
    <Navigation className="navi"/>
    <div className="main">
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </div>
  </HashRouter>
}

export default App;