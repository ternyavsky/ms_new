import { Modal } from "@/entities/Modal";
import { IModalProps } from "@/entities/Modal/types";
import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import styles from "./styles.module.scss";
import { File } from "@/entities";
import { ModalFooter } from "@/entities/Modal/ui/ModalFooter";
import { Button } from "@/shared/ui";

export const AdminClinicFilesModal: FC<PropsWithClassName<IModalProps>> = ({
  isOpen,
  setIsOpenModal,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpenModal={setIsOpenModal}>
      <div>
        <h4 className={styles.title}>Клиника Хелликс</h4>

        <div className={styles.content}>
          <File />
          <File />
        </div>
      </div>
      <ModalFooter>
        <Button className={styles.saveButton} title="Сохранить" />
      </ModalFooter>
    </Modal>
  );
};
