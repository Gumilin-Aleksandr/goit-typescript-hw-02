import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <p className={css.error}>Something went wrong. Try again later...</p>;
};
export default ErrorMessage;
