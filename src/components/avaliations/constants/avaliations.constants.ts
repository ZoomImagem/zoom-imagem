export interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export interface ReviewsData {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
}
