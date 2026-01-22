"use client";

import styles from "./page.module.css";
import { useState } from "react";

type Review = {
  id: number
  name: string;
  review: string;
};

const Reviews = () => {
  const [reviewsState, setReviewsState] = useState<Review[]>([
    { id: 1, name: "דן", review: "אחלה מוצר" },
    { id: 2, name: "נועה", review: "מאוד מרוצה" },
    { id: 3, name: "David", review: "שווה את המחיר" },
    { id: 4, name: "David", review: "שווה את המחיר" },
    { id: 5, name: "David", review: "שווה את המחיר" },
    { id: 6, name: "David", review: "שווה את המחיר" },
    { id: 7, name: "David", review: "שווה את המחיר" },
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Review</h1>
      <div className={styles.reviewList}>
        {reviewsState.map((review) => {
          return (
            <div key={review.id} className={styles.reviewCard}>
              <h3 className={styles.reviewerName}>{review.name}</h3>
              <p className={styles.reviewContant}>{review.review}</p>
            </div>
          );
        })}
      </div>
      <form className={styles.reviewForm}>
          <input type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          required />
          <textarea name="content"
          className={styles.textarea}
          placeholder="Write your review here..."
          required />
          <button
          type="submit"
          className={styles.button}
          >
            Send Review
          </button>
      </form>
    </div>
  );
};

export default Reviews;
