export type Review = {
  id?: number
  name: string;
  review: string;
};

export type ReviewListProps = {
  reviewsState: Review[]
};

export type ReviewFormProps = {
  onAddReview: (review: Review) => void;
};
