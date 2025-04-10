import { Modal } from "@/entities/Modal";
import { ModalProps, PropsWithClassName } from "@/shared/types";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const ConfirmModal: FC<
  PropsWithChildren<PropsWithClassName<ModalProps>>
> = ({ children, className, isOpen, setIsOpen }) => {
  return (
    <Modal
      className={clsx(styles.modal, className)}
      isOpen={isOpen}
      setIsOpenModal={setIsOpen}
    >
      {children}
    </Modal>
  );
};
