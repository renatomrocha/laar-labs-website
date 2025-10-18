import React, { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/images/home.jpg";
import fullLogo from "../../assets/images/logo-no-name.png"; // <-- full logo with text
import Hero from "../../components/common/Hero";
import styles from "./Home.module.css";

const Home: React.FC = () => {
	const { t } = useTranslation();

	const fullText = "LAAR LABS";

	const [index, setIndex] = React.useState(0);
	const interval = useRef<NodeJS.Timeout | undefined>(undefined);

	useEffect(() => {
		interval.current = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
		}, 100);

		const secondInt = setInterval(() => {
			console.log("Running second interval");
			if (interval.current) return;
			setIndex(0);
			interval.current = setInterval(() => {
				setIndex((prevIndex) => (prevIndex + 1) % (fullText.length + 1));
			}, 100);
		}, 5000);

		return () => {
			clearInterval(interval?.current);
			clearInterval(secondInt);
		};
	}, []);

	const textToDisplay = useMemo(() => {
		if (index === fullText.length) {
			clearInterval(interval.current);
			interval.current = undefined;
		}
		return fullText.slice(0, index);
	}, [index]);

	return (
		<div>
			<div className={styles.logoSection}>
				<img width={120} src={fullLogo} alt="LAAR LABS Logo" className={styles.mainLogo} />
				<div className={styles.logoText}>
					{textToDisplay}
					<span className={styles.cursor}>_</span>
				</div>
			</div>
			<Hero title={t("section1.title")} subtitle="We're a small team with a big vision - crafting web and mobile apps, intelligent systems, and robotics solutions. At LAAR LABS, we blend software and hardware to help businesses turn ideas into working technology." imageUrl={heroImage} primaryCta={{ text: "Explore Our Solutions", link: "/about" }} secondaryCta={{ text: "Contact Us", link: "/contact" }} />
			{/* Add prominent logo */}
			{/* Mission */}
			<div className={styles.pad}>
				<div className={styles.sectionDivider}></div>
				<div className={styles.missionSection}>
					<h2 className={styles.sectionTitle}>Our Mission</h2>
					<p>
						We started LAAR LABS because we enjoy building things that make ideas real. Our goal isn't to chase every new buzzword, but to use technology in ways that actually help people and businesses.
						<br />
						For us, that means working at the place where software meets hardware - building apps, prototypes, and systems that are useful, reliable, and sometimes a little experimental.
						<br />
						We're a small team, but we put a lot of care into what we build. Every project is a chance to learn, improve, and create something that matters.
					</p>
				</div>
				<div className={styles.sectionDivider}></div>
				{/* Services */}
				<div className={styles.servicesSection}>
					<h2 className={styles.sectionTitle}>What We Do</h2>
					<div className={styles.servicesGrid}>
						<div className={styles.serviceCard}>
							<h3>Web Applications</h3>
							<p>Custom web platforms that are fast, reliable, and designed to grow with your business - from MVPs to enterprise-scale systems.</p>
						</div>
						<div className={styles.serviceCard}>
							<h3>Mobile Applications</h3>
							<p>Intuitive cross-platform and native mobile apps built for real users and real impact.</p>
						</div>
						<div className={styles.serviceCard}>
							<h3>AI & Robotics</h3>
							<p>From machine learning models to robotic prototypes, we design intelligent systems that push what's possible.</p>
						</div>
						<div className={styles.serviceCard}>
							<h3>Hardware & IoT</h3>
							<p>Prototyping, embedded systems, and connected devices that merge the digital and physical worlds.</p>
						</div>
						<div className={styles.serviceCard}>
							<h3>Consulting</h3>
							<p>Honest, practical advice to help you choose the right tech, reduce risks, and build solutions that last.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
