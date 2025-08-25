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
          AI, or robotics solutions? The team at LAAR-LABS is ready to help.
          Just fill out the form below, and we'll get back to you as soon as
          possible.
        </p>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <ContactForm />
      </section>

      {/* Optional Contact Info */}
    </div>
  );
};

export default Contact;
