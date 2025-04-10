import { PropsWithClassName } from "@/shared/types";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const ConfirmModalContent: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(styles.confirmModalContent, className)}>
      {children}
    </div>
  );
};
