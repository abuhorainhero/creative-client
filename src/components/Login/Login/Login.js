import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';



firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
  
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            var user = result.user;
            const {displayName, email, photoURL} = user;
            const newUserInfo = {
                name: displayName, 
                email: email, 
                image: photoURL}
            setLoggedInUser(newUserInfo);
            storeAuthToken();
            history.replace(from);
          })
          .catch(error => {
            console.log(error.message);
          });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {  
            sessionStorage.setItem('Token', idToken);
            history.replace(from);
          })
          .catch(error => {
              console.log(error);
          });
    }

    return (
        <section className='container'>
            <div className="d-flex flex-column align-items-center my-5 py-5">
                <img style={{height: '50px', width: '150px' }} src={logo} alt="" className="img-fluid" />
                <div className="login-box d-flex flex-column align-items-center">
                    <h1>Login with</h1>
                    <button onClick={handleGoogleLogin}>Continue with Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;