import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import Shop from './Pages/Shop';
import { AuthProvider } from './ConnectToDB/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import { useEffect, useState } from 'react';
import Item from './Pages/Item-Description';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('./ConnectToDB/DBsementara.json')
    .then((response)=>response.json())
    .then((data)=>setData(data.product));
  }, []);

  return (
    <AuthProvider>
      <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shop" element={<Shop data={data} />} />
          <Route path="/item/:id" element={<Item data={data} />} />
        </Routes>
    </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
