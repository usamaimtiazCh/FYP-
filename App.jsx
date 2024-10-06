import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact'
import Register from './Pages/Register/Register';
import Buyer_Dashboard from './Components/Buyer_Dashboard/Buyer_Dashboard';
import BuyerProfile from './Components/Buyer_Dashboard/Buyer_Profile';
import Seller_Dashboard from './Components/Seller_Dashboard/Seller_Dashboard';
import Tenant_Dashboard from './Components/Tenant_Dashboard/Tenant_Dashboard';
import Renter_Dashboard from './Components/Renter_Dashboard/Renter_Dashboard';
import Agent_Dashboard from './Components/Agent_Dashboard/Agent_Dashboard';
import SellerProfile from './Components/Seller_Dashboard/Seller_Profile';
import TenantProfile from './Components/Tenant_Dashboard/Tenant_Profile';
import RenterProfile from './Components/Renter_Dashboard/Renter_Profile';
import AgentProfile from './Components/Agent_Dashboard/Agent_Profile';
import CountDownroom from './Components/Agent_Dashboard/countdown-room';
import ChatPage from './Components/Buyer_Dashboard/ChatPage';

import { toast, ToastContainer } from 'react-toastify';


function App() {
  const navigate = useNavigate()
  const loggedInUser = sessionStorage.getItem('loggedInUser')
  useEffect(() => {
    if (!loggedInUser) {
      navigate('/')
    }
   
  }, [loggedInUser])

  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />


        <Route path="/buyer-dashboard" element={<Buyer_Dashboard />} />
        <Route path="/seller-dashboard" element={<Seller_Dashboard />} />
        <Route path="/tenant-dashboard" element={<Tenant_Dashboard />} />
        <Route path="/renter-dashboard" element={<Renter_Dashboard />} />
        <Route path="/agent-dashboard" element={<Agent_Dashboard />} />


        <Route path="/buyer-dashboard/buyer-profile" element={<BuyerProfile />} />
        <Route path="/seller-dashboard/seller-profile" element={<SellerProfile />} />
        <Route path="/tenant-dashboard/tenant-profile" element={<TenantProfile />} />
        <Route path="/renter-dashboard/renter-profile" element={<RenterProfile />} />
        <Route path="/agent-dashboard/agent-profile" element={<AgentProfile />} />
        <Route path="/agent-dashboard/countdown-room" element={<CountDownroom />} />
        <Route path="/buyer-dashboard/chat" element={<ChatPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
