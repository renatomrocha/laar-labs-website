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
          We started LAAR-LABS with a simple idea: build technology that feels
          useful, thoughtful, and a little bit bold.
          <br />
          Our work spans software, mobile apps, AI, robotics, and hardware - but
          what ties it all together is a hands-on approach. We don't just
          deliver code or circuits; we design complete solutions that help
          people and businesses move forward.
          <br />
          Being a small team means we stay flexible, close to our projects, and
          focused on quality. Every build is personal.
        </p>
      </section>
      <div className={styles.sectionDivider}></div>

      {/* Our Approach / Services */}
      <section className={styles.servicesSection}>
        <h2>What We Do</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Web & Mobile Development</h3>
            <p>
              We build custom web platforms that fit your exact needs — whether
              that's an internal tool, a customer-facing dashboard, or a
              full-scale online service. Our focus is on clean design, reliable
              performance, and systems that can grow as your business does.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Mobile Applications</h3>
            <p>
              From prototypes to polished products, we create mobile apps that
              feel intuitive and run smoothly across devices. We work with both
              cross-platform and native solutions, always prioritizing the user
              experience.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>AI & Robotics</h3>
            <p>
              This is where we get to experiment. We design intelligent systems
              - whether it's training a machine learning model, automating
              processes, or building robotic prototypes. Our aim is to take
              ideas out of the lab and make them useful in the real world.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Hardware & IoT</h3>
            <p>
              Software doesn't live in isolation — and neither do we. We design
              and prototype embedded systems, connected devices, and hardware
              integrations that connect digital services with the physical
              world. Think sensors, controllers, and smart devices that actually
              work in the field.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Consulting</h3>
            <p>
              Sometimes the hardest part is knowing what to build. We help
              companies figure out the right technology path — from choosing
              frameworks to planning architectures and spotting risks early. Our
              advice is practical, honest, and based on real hands-on
              experience.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.sectionDivider}></div>

      <div className={styles.workContainer}>
        <section>
          <div className={styles.workSection}>
            <h2>Our Work</h2>
            <p>
              Even though we're a new company, we focus on hands-on, custom
              solutions for every client. We work directly with modern web and
              mobile technologies, build prototypes in robotics and IoT, and
              develop AI tools tailored to real-world needs. We don't rely on
              generic automation platforms - everything is built from scratch
              when needed, giving our clients exactly what they want. Every
              project is an opportunity to learn, experiment, and deliver
              practical, working solutions.
            </p>
          </div>
        </section>
      </div>
      {/* Team */}
      <div className={styles.sectionDivider}></div>

      <section className={styles.teamSection}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <Card
            imageUrl={teamMember1}
            title="The Rock"
            description="Co-Founder | Software & AI Specialist"
            bio="Passionate about building software that actually solves problems. I focus on web development, AI, and turning ideas into working applications."
          />
          <Card
            imageUrl={teamMember2}
            title="Luís Almeida"
            description="Co-Founder | Robotics & Software Engineer"
            bio="PhD in Robotics and full-stack developer, turning complex ideas into practical systems that bridge software and hardware."
          />
        </div>
      </section>
    </div>
  );
};

export default About;
