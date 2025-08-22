import React from "react";
import styles from "./Hero.module.css";

interface HeroCta {
  text: string;
  link: string;
  target?: "_self" | "_blank";
  rel?: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})`,
      }}
      role="img"
      aria-label={title}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>

        {(primaryCta || secondaryCta) && (
          <div className={styles.ctaButtons}>
            {primaryCta && (
              <a
                href={primaryCta.link}
                target={primaryCta.target || "_self"}
                rel={
                  primaryCta.rel ||
                  (primaryCta.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined)
                }
                className={styles.heroCtaButton}
                aria-label={primaryCta.text}
              >
                {primaryCta.text}
              </a>
            )}

            {secondaryCta && (
              <a
                href={secondaryCta.link}
                target={secondaryCta.target || "_self"}
                rel={
                  secondaryCta.rel ||
                  (secondaryCta.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined)
                }
                className={`${styles.heroCtaButton} ${styles.secondary}`}
                aria-label={secondaryCta.text}
              >
                {secondaryCta.text}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
