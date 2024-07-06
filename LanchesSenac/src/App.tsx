import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import QRCodePage from "./Pages/QRCodePixTest/QRCodePixTest";
import Pagamento from "./Pages/CheckOut/Checkout";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" />
        <Route path="/pix" element={<QRCodePage/>}/>
        <Route path = "/checkout" element={<Pagamento/>}/>
      </Routes> 
    </Router>
  );
};

export default App;
