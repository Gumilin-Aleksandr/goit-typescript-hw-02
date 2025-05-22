import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ImageModal = ({ data, closeModal, isOpen }) => {
  if (!data) return null;

  const {
    alt_description,
    urls: { regular },
  } = data;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          width: "80%",
          height: "80%",
          margin: "auto",
          padding: "0",
        },
      }}
    >
      <img
        src={regular}
        alt={alt_description}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </ReactModal>
  );
};

export default ImageModal;
