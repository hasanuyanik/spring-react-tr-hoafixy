import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/hoaxify.png';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess} from '../redux/authActions';
import ProfileImageWithDefault from './ProfileImageWithDefault';

const TopBar = (props) => {
const {t} = useTranslation();
const { username, isLoggedIn, displayName, image} = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
    username: store.username,
    displayName: store.displayName,
    image: store.image
}));

const menuArea = useRef(null);
const [menuVisible, setMenuVisible] = useState(false);

useEffect(() => {
    document.addEventListener('click', menuClickTracker)
    return () => {
        document.removeEventListener('click', menuClickTracker);
    };
}, [isLoggedIn]);

const menuClickTracker = event => {
    if(menuArea.current == null || !menuArea.current.contains(event.target)){
        setMenuVisible(false);
    }
};

const dispatch = useDispatch();
const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
};
   
let links = (
<ul className="navbar-nav ml-auto">
<li>
    <Link className="nav-link" to="/login">
        {t("Login")}
    </Link>
</li>
<li>
    <Link className="nav-link" to="/signup">
        {t("Sign Up")}
    </Link>
</li>
</ul>
);

    if(isLoggedIn){
        let dropDownClass = 'dropdown-menu p-0 shadow';
        if(menuVisible){
            dropDownClass += ' show';
        }
        links = (
            <ul className="navbar-nav m-auto" ref={menuArea}>
            <li className="nav-item dropdown">
            <div className="nav-link d-flex" style={{ cursor: 'pointer'}} onClick={()=> setMenuVisible(true)}>
                <ProfileImageWithDefault 
                image={image} 
                width="32" height="32" 
                className="rounded-circle m-auto"/>
                <span className="m-auto p-2 dropdown-toggle">{displayName}</span>
            </div>
            <div className={dropDownClass}>
                <Link className="dropdown-item d-flex p-2" to={`/user/${username}`}  onClick={()=> setMenuVisible(false)}>
                    <i className="material-icons text-info mr-2">person</i>
                    <span className="p-2">{t("My Profile")}</span>
                </Link>
                <span className="dropdown-item d-flex p-2" onClick={onLogoutSuccess} style={{ cursor: 'pointer'}}>
                    <i className="material-icons text-info mr-2">power_settings_new</i>
                    <span className="p-2">{t("Logout")}</span>
                </span> 
            </div>
            </li>
            </ul>
        ); 
    };

    return (
        <div className="shadow-sm bg-light mb-2">
            <nav className="navbar navbar-light navbar-expand container">
                <Link className="navbar-brand d-flex" to="/">
                    <img src={logo} width="60" alt="Hoaxify Logo"/>
                    <span className="m-auto p-2">Hoaxify</span>
                </Link>
                {links}
               </nav>
        </div>
        
    );
        
       
    
}


export default TopBar;

