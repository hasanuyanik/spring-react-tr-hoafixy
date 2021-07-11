import React from "react";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import UserLoginPage from "../pages/UserLoginPage";
import LanguageSelector from "../components/LanguageSelector";

function App() {
  return (
    <div className="row">
        <div className="col">
            <UserLoginPage />
        </div>
        <div className="col">
            <UserSignupPage />
        </div>
    <LanguageSelector />
    </div>
  );
}

export default App;
