"use client";
import { Modal as BaseModal, Box } from "@mui/material";
import { ModalProps } from "@/types";
import { Button, ButtonGradient } from "..";

const Modal = ({
  title,
  isOpen,
  onClose,
  onConfirm,
  titleConfirm,
}: ModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <BaseModal open={isOpen} onClose={onClose}>
      <div className="w-[350px] h-[250px] border-none bg-background rounded-[30px] flex flex-col justify-evenly items-center p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="font-bold text-[18px] text-textPrimary text-center w-1/2">
          {title}
        </p>
        <div className="w-full flex flex-row justify-between">
          <Button
            title="Cancelar"
            className="w-20 h-10"
            variant="secondary"
            onClick={onClose}
          />
          <ButtonGradient
            title={titleConfirm}
            className="w-20 h-10"
            onClick={handleConfirm}
          />
        </div>
      </div>
    </BaseModal>
  );

  // return (
  //   <BaseModal
  //     open={isOpen}
  //     onClose={onClose}
  //     aria-labelledby="parent-modal-title"
  //     aria-describedby="parent-modal-description"
  //   >
  //     <Box sx={{ width: 400 }}>
  //       <h2 id="parent-modal-title">Text in a modal</h2>
  //       <p id="parent-modal-description">
  //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //       </p>
  //     </Box>
  //   </BaseModal>
  // );
};

export default Modal;
