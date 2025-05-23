import { Image } from "../App/App.types";

export interface ImageModalProps {
  data: Image;
  closeModal: () => void;
  isOpen: boolean;
}
