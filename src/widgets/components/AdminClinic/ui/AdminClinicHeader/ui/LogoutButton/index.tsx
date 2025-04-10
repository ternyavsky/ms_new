import { PropsWithClassName } from "@/shared/types";
import { Button } from "@/shared/ui";
import { FC, useState } from "react";
import cn from "clsx";
import { LogoutIcon } from "@/icons";
import styles from "./styles.module.scss";
import { AdminClinicExitModal } from "../../../AdminClinicExitModal";

export const LogoutButton: FC<PropsWithClassName> = ({ className }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        className={cn(styles.logoutButton, className)}
        icon={<LogoutIcon width={24} height={24} />}
        styleType="outline"
        onClick={() => setIsOpenModal(true)}
      />

      <AdminClinicExitModal
        isOpen={isOpenModal}
        setIsOpen={(isOpen) => setIsOpenModal(isOpen)}
      />
    </>
  );
};
