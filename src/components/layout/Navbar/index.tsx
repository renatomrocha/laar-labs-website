import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo-no-name.png";
import styles from "./Navbar.module.css";

const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const { t, i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
	const closeMobileMenu = () => setMobileMenuOpen(false);

	return (
		<nav className={styles.navbar}>
			{/* Brand with Logo */}
			<div className={styles.navbarBrand}>
				<NavLink to="/" onClick={closeMobileMenu} className={styles.brandLink}>
					<img src={logo} alt="LAAR LABS Logo" className={styles.logo} />
					<span className={styles.brandText}>
						LAAR LABS<span className={styles.cursor}>_</span>
					</span>
				</NavLink>
			</div>

			{/* Hamburger Button */}
			<button className={`${styles.hamburger} ${isMobileMenuOpen ? styles.isOpen : ""}`} onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen} aria-controls="navbar-menu" aria-label="Toggle navigation">
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</button>

			{/* Nav Links */}
			<ul id="navbar-menu" className={`${styles.navbarNav} ${isMobileMenuOpen ? styles.active : ""}`}>
				{navLinks.map(({ to, label }) => (
					<li key={to} className={styles.navItem}>
						<NavLink to={to} onClick={closeMobileMenu} className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink)} end>
							{label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
