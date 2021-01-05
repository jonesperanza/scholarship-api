import React from "react";
import { 
  BrowserRouter as Router,
} from "react-router-dom";
import Nav from '../components/nav/nav.js';
import Container from '../components/nav/container.js';


export default function BasicExample() {
  return (
    <Router>
      <div>
        <Nav />
        <Container />
      </div>
    </Router>
  );
}