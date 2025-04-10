import { CloseIcon } from "@/icons";
import { ModalProps, PropsWithClassName } from "@/shared/types";
import { Button } from "@/shared/ui";
import { ConfirmModal } from "@/widgets/components/ConfirmModal";
import { ConfirmModalContent } from "@/widgets/components/ConfirmModal/components/ConfirmModalContent";
import { ConfirmModalFooter } from "@/widgets/components/ConfirmModal/components/ConfirmModalFooter";
import { ConfirmModalIcon } from "@/widgets/components/ConfirmModal/components/ConfirmModalIcon";
import clsx from "clsx";
import { FC } from "react";

export const AdminClinicDeleteClinicModal: FC<
  PropsWithClassName<ModalProps>
> = ({ className, isOpen, setIsOpen }) => {
  return (
    <ConfirmModal
      className={clsx(className)}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <ConfirmModalContent>
        <ConfirmModalIcon>
          <CloseIcon width={60} height={60} color="#D64657" />
        </ConfirmModalIcon>
      </ConfirmModalContent>

      <ConfirmModalFooter>
        <Button title="Отменить" />
        <Button title="Удалить" styleType="outline" />
      </ConfirmModalFooter>
    </ConfirmModal>
  );
};
