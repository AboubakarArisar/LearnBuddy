import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import App from "../App";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='home' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
