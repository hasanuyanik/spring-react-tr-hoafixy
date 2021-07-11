import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import UserLoginPage from "../pages/UserLoginPage";
import LanguageSelector from "../components/LanguageSelector";
import HomePage from "../pages/HomePage";
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import UserPage from '../pages/UserPage';
import TopBar from "../components/TopBar";
import {connect } from 'react-redux';
// import {Authentication} from '../shared/AuthenticationContext';

class App extends React.Component {
  //static contextType = Authentication;
  
  render(){
    const {isLoggedIn}= this.props;
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        {!isLoggedIn && (
        <Route path="/login" component={UserLoginPage}/>
        )}
        {!isLoggedIn && (
        <Route path="/signup" component={UserSignupPage}/>
        )}
        <Route path="/user/:username" component={UserPage}/>
        <Redirect to="/"/>
        </Switch>
      </Router>
    <LanguageSelector />
    </div>
  );
  }
}

const mapStateToProps = store => {
  return {
    isLoggedIn: store.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
