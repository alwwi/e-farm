import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import { AuthProvider } from './ConnectToDB/AuthContext';


function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Dashboard />
    </div>
    </AuthProvider>
  );
}

export default App;
