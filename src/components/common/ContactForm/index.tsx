import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service is not configured properly.");
      return;
    }

    try {
      setIsSending(true);
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      ref={form}
      className={styles.form}
      onSubmit={sendEmail}
      aria-busy={isSending}
    >
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          placeholder="Your full name"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="your@example.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          rows={6}
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
