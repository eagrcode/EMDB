import { useParams } from "react-router";

import { useReviews } from "../getDetails";

import { Review } from "../Components";

function Reviews() {
  const { id } = useParams();

  const { data: reviews, isLoading, isError } = useReviews(id);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <section id="reviews-section">
      <h2 className="reviews-header">Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, id) => (
          <Review
            key={id}
            author={review.author}
            content={review.content}
            created={review.created_at}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
