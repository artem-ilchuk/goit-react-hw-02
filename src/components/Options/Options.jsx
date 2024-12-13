import s from "./Options.module.css";
import clsx from "clsx";

const Options = ({ onClick, onReset, total }) => {
  return (
    <div className={s.action}>
      <button onClick={() => onClick("good")} className={s.button}>
        Good
      </button>
      <button
        onClick={() => onClick("neutral")}
        className={clsx(s.button, s.neutral)}
      >
        Neutral
      </button>
      <button onClick={() => onClick("bad")} className={clsx(s.button, s.bad)}>
        Bad
      </button>
      {total > 0 && (
        <button onClick={onReset} className={clsx(s.button, s.reset)}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
