import css from "./App.module.css";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import React from "react";
import { getImages } from "../../api/api-images";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data.results]);
        setShowBtn(data.total_pages && data.total_pages !== page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  function openModal(image) {
    setIsOpen(true);
    setSelectedImage(image);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={css.container}>
      <SearchBar images={images} onSearch={handleSearch} />
      <ImageGallery items={images} openModal={openModal} />
      {isLoading && <Loader />}
      {showBtn && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {isError && <ErrorMessage />}
      {modalIsOpen && selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          data={selectedImage}
        />
      )}
    </div>
  );
}
