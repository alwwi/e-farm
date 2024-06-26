import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import Shop from './Pages/Shop';
import { AuthProvider } from './ConnectToDB/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import { useEffect, useState } from 'react';
import Item from './Pages/Item-Description';
import Features from './Pages/Features';
import Collaboration from './Pages/Collaboration';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/DB/DBsementara.json')
    .then((response)=>{
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
      return response.json()
    
    })
    .then((data)=>setData(data.product))
    .catch((error)=>console.error('Error fetching data:', error))
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
          <Route path="/features" element={<Features />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
