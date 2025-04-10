import { ExitIcon } from "@/icons";
import { ModalProps, PropsWithClassName } from "@/shared/types";
import { Button } from "@/shared/ui";
import { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { ConfirmModal } from "@/widgets/components/ConfirmModal";
import { ConfirmModalContent } from "@/widgets/components/ConfirmModal/components/ConfirmModalContent";
import { ConfirmModalTitle } from "@/widgets/components/ConfirmModal/components/ConfirmModalTitle";
import { ConfirmModalFooter } from "@/widgets/components/ConfirmModal/components/ConfirmModalFooter";
import { ConfirmModalIcon } from "@/widgets/components/ConfirmModal/components/ConfirmModalIcon";

export const AdminClinicExitModal: FC<PropsWithClassName<ModalProps>> = ({
  className,
  isOpen,
  setIsOpen,
}) => {
  return (
    <ConfirmModal
      className={clsx(styles.modal, className)}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <ConfirmModalContent>
        <ConfirmModalIcon>
          <ExitIcon />
        </ConfirmModalIcon>

        <ConfirmModalTitle>Вы уверены, что хотите выйти?</ConfirmModalTitle>
      </ConfirmModalContent>
      <ConfirmModalFooter>
        <Button
          title="Отменить"
          size="normal"
          onClick={() => setIsOpen(false)}
        />
        <Button
          title="Выйти"
          styleType="outline"
          size="normal"
          onClick={() => setIsOpen(false)}
        />
      </ConfirmModalFooter>
    </ConfirmModal>
  );
};
