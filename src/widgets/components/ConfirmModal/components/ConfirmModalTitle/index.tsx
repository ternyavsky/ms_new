import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const ConfirmModalTitle: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <h4 className={clsx(styles.confirmModalTitle, className)}>{children}</h4>
  );
};
