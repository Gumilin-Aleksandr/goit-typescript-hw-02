import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSearch }) {
  const notify = () =>
    toast("The field cannot be empty!", {
      icon: "!!!",
      style: {
        borderRadius: "10px",
        background: "red",
        color: "#fff",
        fontFamily: "Tahoma",
      },
    });

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query === "") {
          notify();
        } else {
          onSearch(values.query);
          actions.resetForm();
        }
      }}
    >
      <header className={css.container}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
        <Toaster position="top-right" reverseOrder={false} />
      </header>
    </Formik>
  );
}

export default SearchBar;
