import './App.css';
import AppRoutes from './config/routes';
import { AuthProvider } from "react-oidc-context";
import AppProvider from './AppProvider';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>      
    </AuthProvider>
  )
}

export default App;