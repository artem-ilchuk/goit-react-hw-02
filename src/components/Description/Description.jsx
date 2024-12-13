import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.cafe}>
      <h1 className={s.cafe_title}>Sip Happens Café</h1>
      <p className={s.cafe_text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
