import { useEffect, useState } from 'react';
import { useAuth } from "react-oidc-context";
import { Navigate, useLocation } from 'react-router-dom';
import { useAppCtx } from '../AppProvider';
import LoadingScreen from "../components/loading";
import './Login.css';

function Login() {
  const { userInfo, action } = useAppCtx();
  const auth = useAuth();
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);

  console.log('rendering..... login', auth.user)
  useEffect(() => {
    if (auth.isAuthenticated && !userInfo.ready) {
        action.setUserInfo({
          ready: true,
          username: auth.user?.profile.preferred_username,
          displayName: auth.user?.profile.given_name + ' ' + auth.user?.profile.family_name
      });
      setTimeout(() => {
          setIsReady(true);
      }, 1000);
    }
  }, [auth, userInfo.ready]);

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <LoadingScreen text={"Signing you in..."} />;
    case "signoutRedirect":
      return <LoadingScreen text={"Signing you out..."} />;
  }

  if (auth.isLoading) {
    return <LoadingScreen text={"Loading..."} />;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    if (isReady) {
      const backTo = location.state?.backTo || '/home'
      if(action.isStaff()){
          return <Navigate to = '/announcement' replace />
      }
      return <Navigate to={backTo} replace />
    } else {
      return <LoadingScreen text="Waiting a minute..." />;
    }
  }

  return (
    <div className="login-container">
      <div className="logo-button-container">
        <div className="content-container">
          <div className="logo-container">
            <img src={require('../image/psu.png')} alt="Logo" className="logo-img" />
          </div>
          <div className="text-content-wrapper">
            <div className="hit-the-floor">Welcome to PSU Announcement</div>
          </div>
        </div>
        <div>
          <button className="login-button" onClick={() => void auth.signinRedirect()}>
            Enter Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;