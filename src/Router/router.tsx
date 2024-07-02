import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import App from "../App";
import Footer from "../Components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
