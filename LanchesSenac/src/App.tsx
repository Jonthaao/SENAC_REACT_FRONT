import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import QRCodePage from "./Pages/QRCodePixTest/QRCodePixTest";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" />
        <Route path="/pix" element={<QRCodePage/>}/>
      </Routes> 
    </Router>
  );
};

export default App;
