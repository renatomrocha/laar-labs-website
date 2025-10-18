import React, { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import fullLogo from "../../assets/images/logo-no-name.png"; // <-- full logo with text
import styles from "./ComingSoon.module.css";

const ComingSoon: React.FC = () => {
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
			<div className={styles.comingSoonContainer}>
				<div className={styles.logoSection}>
					<img src={fullLogo} alt="LAAR LABS Logo" className={styles.mainLogo} />
					<div className={styles.logoText}>
						{textToDisplay}
						<span className={styles.cursorAnimated}>_</span>
					</div>
					<div style={{ marginTop: "3rem", fontSize: "1.5rem", fontWeight: "bold" }}>
						<span>Coming Soon</span>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default ComingSoon;
