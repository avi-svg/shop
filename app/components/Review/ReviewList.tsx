import {ReviewListProps} from '@/types/ReviewsTypes';
import ReviewCard from './ReviewCard';
import styles from './ReviewList.module.css';



const ReviewList = ({reviewsState}: ReviewListProps) => {
    return(
        <div className={styles.reviewList}>
        {reviewsState.map((review) => {
            return(
            <ReviewCard 
                key={review.id}
                name={review.name}
                review={review.review}
            />
            )
        })}
      </div>
    )
}


export default ReviewList;