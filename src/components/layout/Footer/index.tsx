import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear() || 2024;

	return (
		<footer className={styles.footer}>
			{/* System Status */}
			<div className={styles.status} aria-label="System Status">
				{/* <span className={styles.statusLight} aria-hidden="true"></span>
        <span className={styles.statusText}>SYSTEM STATUS: OPERATIONAL</span> */}
			</div>

			{/* Copyright */}
			<div className={styles.copyright}>&copy; {currentYear} LAAR LABS</div>

			{/* Social Links */}
			<nav className={styles.socials} aria-label="Social Links">
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
					<FaGithub />
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
