import Navbar from "./components/navbar/Navbar";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
