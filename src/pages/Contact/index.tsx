import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../../components/common/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Let's Build Something Together</h1>
        <p>
          Have a project in mind or a question about our software, mobile apps,
          AI, or robotics services? Our team at LAAR-LABS is ready to help. Fill
          out the form below, and we'll get back to you promptly.
        </p>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <ContactForm />
      </section>

      {/* Optional Contact Info */}
      <section className={styles.contactInfoSection}>
        <h2>Other Ways to Reach Us</h2>
        <p>
          Email: <a href="mailto:hello@laarlabs.com">hello@laarlabs.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </p>
        <p>Address: 123 Innovation Drive, Tech City</p>
      </section>
    </div>
  );
};

export default Contact;
