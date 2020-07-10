import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Javascript from './components/Javascript';
import Python from './components/Python';
import Php from './components/PHP';

const Root = () => 
  <Router>
    <div>
      <Navbar>
          <Nav>
            <Navbar.Brand>
                <Link className="nav-link" to="/">News App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Nav>
          <Navbar.Collapse>
            <Nav>
              <NavItem exact activeClassName="active">
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
              <NavItem  activeClassName="active">
                <Link className="nav-link" activeClassName="active" to="/javascript">Javascript</Link>
              </NavItem>
              <NavItem  activeClassName="active">
                <Link className="nav-link" activeClassName="active" to="/python">Python</Link>
              </NavItem>
              <NavItem  activeClassName="active">
                <Link className="nav-link" activeClassName="active" to="/php">PHP</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={ App } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/javascript" component={ Javascript } />
      <Route exact path="/python" component={ Python } />
      <Route exact path="/php" component={ Php } />
    </div>
  </Router>

const About = () =>
<div>
    <h1>
        This is about page...
    </h1>
</div>

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
