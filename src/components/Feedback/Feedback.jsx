import s from "./Feedback.module.css";

const Feedback = ({ reviews, positive, total }) => {
  return (
    <div className={s.results}>
      <p className={s.text}>Good: {reviews.good}</p>
      <p className={s.text}>Neutral: {reviews.neutral}</p>
      <p className={s.text}>Bad: {reviews.bad}</p>
      <p className={s.text}>Total: {total}</p>
      <p className={s.text}>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
