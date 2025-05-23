import { Image } from "../App/App.types";

export interface ImageGalleryProps {
  items: Image[];
  openModal: (image: Image) => void;
}
