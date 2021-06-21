import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Projects from "./components/pages/projects";
// import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Footer from "./components/footer/footer";



function App() {

    

  return (


<Router>      
  <div>
<Nav />
<Route exact path="/react-portfolio"> 
<About  />
</Route>

<Route exact path="/react-portfolio">
<About />
</Route>

<Route exact path="/react-portfolio/projects">
<Projects  />
</Route> 

<Footer/>
</div>
</Router>

  )};

export default App;