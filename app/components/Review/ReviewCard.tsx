import {Review} from "@/types/ReviewsTypes";
import styles from "./ReviewCard.module.css";



const ReviewCard = ({id, name, review}: Review) => {
  return (
    <div key={id} className={styles.reviewCard}>
      <h3 className={styles.reviewerName}>{name}</h3>
      <p className={styles.reviewContant}>{review}</p>
    </div>
  );
};

export default ReviewCard;