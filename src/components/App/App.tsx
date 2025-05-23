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
import { Image } from "./App.types";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

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
        setShowBtn(page < data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = async (topic: string) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  function openModal(image: Image): void {
    setIsOpen(true);
    setSelectedImage(image);
  }

  function closeModal(): void {
    setIsOpen(false);
  }
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
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
      {!isLoading && images.length === 0 && !isError && (
        <p className={css.empty}>No images.</p>
      )}
    </div>
  );
}
