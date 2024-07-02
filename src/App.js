import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard.jsx';
import Shop from './Pages/Shop.jsx';
import { AuthProvider } from './ConnectToDB/AuthContext.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar/CustomNavbar.jsx';
import { useEffect, useState } from 'react';
import Item from './Pages/Item-Description.jsx';
import Features from './Pages/Features.jsx';
import Collaboration from './Pages/Collaboration.jsx';
import Blog from './Pages/Blog.jsx';
import Cart from './Pages/Cart.jsx';
import { db, ref, get } from './ConnectToDB/Firebase-config.mjs'; 

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productSnapshot = await get(ref(db, 'product'));

        if (productSnapshot.exists()) {
          const productData = productSnapshot.val();
          setData(Object.values(productData));
        } else {
          console.error('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
            <Route path="/blog" element={<Blog data={data} />} />
            <Route path="/cart" element={<Cart data={data} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
