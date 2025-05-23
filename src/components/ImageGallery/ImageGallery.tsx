import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id} onClick={() => openModal(item)}>
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
