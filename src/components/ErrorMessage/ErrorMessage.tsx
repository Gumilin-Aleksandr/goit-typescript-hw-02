import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return <p className={css.error}>Something went wrong. Try again later...</p>;
};
export default ErrorMessage;
