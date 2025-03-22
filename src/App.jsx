import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
   
  
  <Router>
         <Navbar />
         <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        </div>
       </Router>
  
    
    
   
  );
}

export default App;
