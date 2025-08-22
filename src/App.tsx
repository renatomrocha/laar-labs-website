import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styles from "./App.module.css"; // Import the new CSS module

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        {" "}
        {/* Main container */}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <Navbar />
        <main className={styles.contentArea}>
          {" "}
          {/* Scrollable content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
