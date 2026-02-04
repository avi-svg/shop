import { Review, ReviewFormProps } from "@/types/ReviewsTypes";
import styles from "./ReviewForm.module.css";
import { BaseSyntheticEvent, useState } from "react";

const ReviewForm = ({ onAddReview }: ReviewFormProps) => {
  const [newReview, setNewReview] = useState<Review>({
    
    name: "",
    review: "",
  });

  const handelNewReviewNameChang = (event: BaseSyntheticEvent) => {
    const { name, value } = event.target;

    setNewReview((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handelSendReview = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    if (newReview.name && newReview.review) {

      try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newReview)
        })
        if(!res.ok){
          throw new Error("failed to fetch");
        }
        onAddReview(newReview);      
        setNewReview({
            
            name: "",
            review: "",
        });
      }catch(e){
        alert("error sending!")
      }


    }
  };

  return (
    <form className={styles.reviewForm} onSubmit={handelSendReview}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className={styles.input}
        value={newReview.name}
        onChange={handelNewReviewNameChang}
        required
      />
      <textarea
        name="review"
        className={styles.textarea}
        placeholder="Write your review here..."
        value={newReview.review}
        onChange={handelNewReviewNameChang}
        required
      />
      <button type="submit" className={styles.button}>
        Send Review
      </button>
    </form>
  );
};

export default ReviewForm;
