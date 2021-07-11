import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import UserLoginPage from "../pages/UserLoginPage";
import LanguageSelector from "../components/LanguageSelector";
import HomePage from "../pages/HomePage";
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import UserPage from '../pages/UserPage';
import TopBar from "../components/TopBar";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: undefined
  }
  onLoginSuccess = (username) => {
    this.setState({
      username,
      isLoggedIn: true
    })
  };
  onLogoutSuccess = () => {
    this.setState({
      isLoggedIn: false,
      username: undefined
    })
  }
  render(){
    const { isLoggedIn, username} = this.state;
  return (
    <div>
      <Router>
        <TopBar username={username} isLoggedIn={isLoggedIn} onLogoutSuccess={this.onLogoutSuccess}/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        {!isLoggedIn && (
        <Route 
          path="/login" 
          component={(props) =>{
          return <UserLoginPage { ... props} onLoginSuccess={this.onLoginSuccess}/>
        }}/>
        )}
        {!isLoggedIn && (
        <Route path="/signup" component={UserSignupPage}/>
        )}
        <Route path="/user/:username" component={props => {
          return <UserPage { ... props} username={username} />
        }}/>
        <Redirect to="/"/>
        </Switch>
      </Router>
    <LanguageSelector />
    </div>
  );
  }
}

export default App;
