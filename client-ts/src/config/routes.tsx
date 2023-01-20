import { Route, Routes, } from 'react-router-dom';

import Login from '../pages/login';
import UserResultList from '../pages/user-result-list';
//import AnnouncementList from '../pages/announcement-list';
//import { useAuth } from "react-oidc-context";
//import { useAppCtx } from '../AppProvider';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login/>} />
      <Route path="home" element={<UserResultList/>} />
    </Routes>
  );
};

export default AppRoutes;