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

  if (reviews?.length === 0) {
    return (
      <section id="reviews-section">
        <h2 className="reviews-header">Reviews</h2>
        <p>Oops! There doesn't seem to be any reviews for this Movie yet.</p>
      </section>
    );
  }

  return (
    <section id="reviews-section">
      <h2 className="reviews-header">Reviews {`(${reviews.length})`}</h2>
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
