import React from "react";
import Hero from "../../components/common/Hero";
import styles from "./Home.module.css";
import heroImage from "../../assets/images/home.jpg";
import fullLogo from "../../assets/images/logo.png"; // <-- full logo with text

const Home: React.FC = () => {
  return (
    <div className="">
      <div className={styles.logoSection}>
        <img src={fullLogo} alt="LAAR LABS Logo" className={styles.mainLogo} />
      </div>
      <Hero
        title="Innovating in Software, Mobile, AI & Robotics"
        subtitle="LAAR-LABS is a joint venture delivering end-to-end technology solutions — from web and mobile apps to intelligent hardware and robotics. We combine engineering expertise with visionary thinking to help businesses innovate, scale, and lead in the digital age."
        imageUrl={heroImage}
        primaryCta={{ text: "Explore Our Solutions", link: "/about" }}
        secondaryCta={{ text: "Contact Us", link: "/contact" }}
      />
      {/* Add prominent logo */}
      {/* Mission */}
      <div className={styles.headerSection}>
        <h2>Our Mission</h2>
        <p>
          At LAAR-LABS, our mission is to bridge the gap between software and
          hardware innovation. We provide cutting-edge solutions in artificial
          intelligence, robotics, and modern software development.
          <br />
          By combining engineering expertise with visionary thinking, we empower
          companies to solve complex challenges, accelerate growth, and shape a
          smarter future.
        </p>
      </div>
      {/* Services */}
      <div className={styles.servicesSection}>
        <h2>What We Do</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Web Applications</h3>
            <p>
              Modern, scalable, and secure web applications built with the
              latest technologies to power your business online.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Mobile Applications</h3>
            <p>
              Cross-platform and native mobile apps that deliver seamless user
              experiences and real-world impact.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>AI & Robotics</h3>
            <p>
              Intelligent systems, machine learning, and robotics solutions to
              transform industries and drive innovation.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hardware & IoT</h3>
            <p>
              Embedded systems, IoT devices, and hardware integration that
              connect the digital and physical worlds.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Consulting</h3>
            <p>
              Strategic technology consulting to help businesses make smarter
              decisions, scale efficiently, and future-proof solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
