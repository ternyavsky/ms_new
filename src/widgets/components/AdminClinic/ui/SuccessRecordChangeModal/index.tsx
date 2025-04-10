import { CheckIcon } from "@/icons";
import { ModalProps, PropsWithClassName } from "@/shared/types";
import { Text } from "@/shared/ui/Text";
import { ConfirmModal } from "@/widgets/components/ConfirmModal";
import { ConfirmModalContent } from "@/widgets/components/ConfirmModal/components/ConfirmModalContent";
import { ConfirmModalFooter } from "@/widgets/components/ConfirmModal/components/ConfirmModalFooter";
import { ConfirmModalIcon } from "@/widgets/components/ConfirmModal/components/ConfirmModalIcon";
import { ConfirmModalTitle } from "@/widgets/components/ConfirmModal/components/ConfirmModalTitle";
import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.scss";

export const SuccessRecordChangeModal: FC<PropsWithClassName<ModalProps>> = ({
  className,
  isOpen,
  setIsOpen,
}) => {
  return (
    <ConfirmModal
      className={clsx(styles.successRecordChangeModal, className)}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <ConfirmModalContent>
        <ConfirmModalIcon>
          <CheckIcon width={60} height={60} color="#00CC5E" />
        </ConfirmModalIcon>

        <ConfirmModalTitle>
          Запись была согласована и изменена на: 21.07.2024 / 12:00
        </ConfirmModalTitle>
      </ConfirmModalContent>

      <ConfirmModalFooter>
        <Text type="p" fz={24} fw={500} position="center">
          21.07.2024 / 12:00
        </Text>
      </ConfirmModalFooter>
    </ConfirmModal>
  );
};
