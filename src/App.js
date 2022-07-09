import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/page/Home';
import ProjectDetail from './components/page/ProjectDetail';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/' exact><Home/></Route>
          <Route path='/projects/:projectId' >
            <ProjectDetail/>
          </Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
