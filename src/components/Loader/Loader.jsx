// import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

// export default function Loader() {
//   return (
//     <div className={css.loader}>
//       <RotatingLines
//         visible={true}
//         height="50"
//         width="50"
//         color="grey"
//         strokeWidth="5"
//         strokeColor="purple"
//         animationDuration="0.75"
//         ariaLabel="rotating-lines-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//       />
//     </div>
//   );
// }
// import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const color = "#ff0000";
const loading = true;

export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
