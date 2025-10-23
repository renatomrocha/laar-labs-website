import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css"; // Import the new CSS module
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
	// return <ComingSoon />;

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
					<Footer />
				</main>
			</div>
		</Router>
	);
}

export default App;
