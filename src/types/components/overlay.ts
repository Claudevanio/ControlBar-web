export type ModalProps = {
  title: string;
  titleConfirm?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};
