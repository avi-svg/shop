"use client";

import { Review } from "@/types/ReviewsTypes";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import ReviewForm from "../components/Review/ReviewForm";
import ReviewList from "../components/Review/ReviewList";

const Reviews = () => {
  const [reviewsState, setReviewsState] = useState<Review[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleAddReview = (newReview: Review) => {
    setReviewsState((prev) => {
      return [...prev, newReview];
    });
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviewsState(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("unkown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Reviews</h1>

      {
        loading &&<p>Loading...</p>
      }
      {
        error && <p>{error}</p>
      }

      <ReviewList reviewsState={reviewsState} />
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};

export default Reviews;
