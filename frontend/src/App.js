import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
import SellorPannel from './Sellor/SellorPannel';
import SellerRoute from './Routers/SellerRoute';
// import Routers from './Routers/Routers';

function App() {
  const isAdmin=true;
  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        <Route path="/seller/*" element={<SellerRoute/>} />
     
      </Routes>
    </div>
  );
}

export default App;
