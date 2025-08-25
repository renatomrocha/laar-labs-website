import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  bio?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, bio }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {bio && <p className={styles.cardBio}>{bio}</p>}
      </div>
    </div>
  );
};

export default Card;
