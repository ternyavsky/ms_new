import { PropsWithClassName } from "@/shared/types";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const ModalTitle: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return <h5 className={clsx(styles.modalTitle, className)}>{children}</h5>;
};
