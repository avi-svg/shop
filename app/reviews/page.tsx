"use client";

import { Review } from "@/types/ReviewsTypes";
import styles from "./page.module.css";
import { useState } from "react";
import ReviewForm from "../components/Review/ReviewForm";
import ReviewList from "../components/Review/ReviewList";

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

  const handleAddReview = (newReview: Review) => {
    setReviewsState(
      (prev) => {
        return[...prev, newReview]
      }
    )
  }

  return(  
    <div className={styles.container}>
      <h1 className={styles.title}>Product Reviews</h1>
      <ReviewList reviewsState={reviewsState}/>
      <ReviewForm onAddReview={handleAddReview}/>
    </div>
  )
};

export default Reviews;
