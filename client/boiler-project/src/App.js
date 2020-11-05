import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import { Button, Layout, Sliderm  } from 'antd';


function App() {
  return (
    <Router>
          {/* div 는 위에 목차처럼 하기 위해서 */}
      <div>
      <Button type ="default">Button</Button>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">로그인 페이지</Link>
          </li>
          <li>
            <Link to="/register">Register 페이지</Link>
          </li>
        </ul>
        <hr />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {/* <Route exact path="/">
            <LandingPage />
          </Route> 아래와 같이 좀더 깔끔하게 표현 할 수 있음 */} 
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
        
      </div>
    </Router>
    
  );
}
  // You can think of these components as "pages"
// in your app.

export default App;
