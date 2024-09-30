import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import BookDetail from "./components/BookDetail";
import CartDetail from "./components/CartDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/cart" element={<CartDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
