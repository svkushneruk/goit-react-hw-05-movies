import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/MovieAPI';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    API.getReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewCard info={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
