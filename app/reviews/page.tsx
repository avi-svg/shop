"use client";

import styles from "./page.module.css";
import { BaseSyntheticEvent, useState } from "react";

type Review = {
  id?: number
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


  const [newReview, setNewReview] = useState<Review>({
    name: '',
    review: ''
  });


  const handelNewReviewNameChang = (event: BaseSyntheticEvent) => {
    const {name, value} = event.target;
    
    
    setNewReview((prev) => {
      return {...prev,
        [name]: value
      }
    })
  }

  const handelSendReview = (event: BaseSyntheticEvent) =>{
    event.preventDefault();

    if(newReview.name && newReview.review){
      setReviewsState((prev) => {
        return(
          [...prev, {...newReview}]
        )
      })
      setNewReview({
        name: '',
        review: '',
      })
    }
  }

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
      <form className={styles.reviewForm} onSubmit={handelSendReview}>
          <input type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          value={newReview.name}
          onChange={handelNewReviewNameChang}
          required />
          <textarea name="review"
          className={styles.textarea}
          placeholder="Write your review here..."
          value={newReview.review}
          onChange={handelNewReviewNameChang}
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
