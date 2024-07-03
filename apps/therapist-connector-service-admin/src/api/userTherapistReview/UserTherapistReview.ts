export type UserTherapistReview = {
  createdAt: Date;
  id: string;
  rating: number | null;
  reviewId: string | null;
  reviewText: string | null;
  therapistId: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userId: string | null;
};
