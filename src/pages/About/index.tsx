import React from "react";
import styles from "./About.module.css";
import Card from "../../components/common/Card";

// Team member images
import teamMember1 from "../../assets/images/team-member-1.jpg";
import teamMember2 from "../../assets/images/team-member-2.jpg";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Header / Company Mission */}
      <section className={styles.headerSection}>
        <h1>About LAAR-LABS</h1>
        <p>
          LAAR-LABS is a collaborative technology company delivering end-to-end
          solutions in software, mobile apps, AI, robotics, and hardware
          engineering.
          <br />
          <br />
          We combine engineering expertise, creative problem-solving, and
          strategic consulting to help businesses innovate, scale, and lead in
          the digital age.
        </p>
      </section>

      {/* Our Approach / Services */}
      <section className={styles.servicesSection}>
        <h2>What We Do</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Web & Mobile Development</h3>
            <p>
              Custom web and mobile applications tailored to your business
              goals, ensuring scalability, performance, and excellent user
              experience.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>AI & Robotics</h3>
            <p>
              Intelligent automation, machine learning models, and robotics
              solutions that enhance efficiency and create new business
              opportunities.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hardware & IoT</h3>
            <p>
              Embedded systems, IoT devices, and smart hardware integration to
              bridge the digital and physical worlds.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Consulting</h3>
            <p>
              Expert technology consulting to guide strategy, accelerate growth,
              and deliver innovative solutions across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <Card
            imageUrl={teamMember1}
            title="The Rock"
            description="Co-Founder | Software & AI Specialist"
          />
          <Card
            imageUrl={teamMember2}
            title="John Cena"
            description="Co-Founder | Robotics & Hardware Expert"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
