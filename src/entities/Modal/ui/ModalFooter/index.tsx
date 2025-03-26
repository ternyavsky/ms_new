import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

export const ModalFooter: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.modalFooter, className)}>{children}</div>;
};
