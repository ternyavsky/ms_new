import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import clsx from "clsx";

export const ConfirmModalFooter: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(styles.confirmModalFooter, className)}>{children}</div>
  );
};
